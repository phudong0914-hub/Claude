// ========================================================================
// CLAUDE MASTERY – TELEGRAM BOT ADMIN APPROVAL SYSTEM
// Google Apps Script Backend (Code.gs)
// ========================================================================
// Hướng dẫn: Dán toàn bộ file này vào Google Apps Script Editor (script.google.com)
// Sau đó điền 4 giá trị CONFIG bên dưới rồi Deploy > Web App
// ========================================================================

// ═══════════════════════════════════════════════════════════════════════
// 1. CẤU HÌNH – ĐỌC ĐỘNG TỪ SCRIPT PROPERTIES (ĐÃ BẢO MẬT)
// Hướng dẫn: Để bảo mật, không viết cứng key ở đây. Hãy vào Project Settings
// (bánh răng ⚙️ bên trái) > cuộn xuống Script Properties > Thêm các khóa sau:
// - TELEGRAM_BOT_TOKEN
// - TELEGRAM_ADMIN_CHAT_ID
// - SUPABASE_URL
// - SUPABASE_ANON_KEY
// - SUPABASE_RPC_SECRET
// - SPREADSHEET_ID
// ═══════════════════════════════════════════════════════════════════════
const scriptProps = PropertiesService.getScriptProperties();

const CONFIG = {
  TELEGRAM_BOT_TOKEN: scriptProps.getProperty("TELEGRAM_BOT_TOKEN") || "8961104144:AAF4NiZwJLta8QTsv-wkWD2XZoKiD9v010c",
  TELEGRAM_ADMIN_CHAT_ID: scriptProps.getProperty("TELEGRAM_ADMIN_CHAT_ID") || "1790844371",
  SUPABASE_URL: scriptProps.getProperty("SUPABASE_URL") || "https://jnqmfghlnyvrlqiepfac.supabase.co",
  SUPABASE_ANON_KEY: scriptProps.getProperty("SUPABASE_ANON_KEY") || "sb_publishable_VZRfLai9Ee1BauvY8m_Ojg_0nLqWZhV",
  SUPABASE_RPC_SECRET: scriptProps.getProperty("SUPABASE_RPC_SECRET") || "mat_khau_kich_hoat_123",
  SPREADSHEET_ID: scriptProps.getProperty("SPREADSHEET_ID") || "1xYMUi6aJjmpV4ZKNzojzdCDThTgViD30ibbRagGmuaQ",
  SHEET_NAME: "Payments",
  BLOCKLIST_SHEET_NAME: "Blocklist"
};


// ═══════════════════════════════════════════════════════════════════════
// 2. XỬ LÝ REQUEST GET (từ Web App)
// ═══════════════════════════════════════════════════════════════════════
function doGet(e) {
  const action = (e.parameter.action || "").toLowerCase();

  try {
    if (action === "submit") {
      return handlePaymentSubmission(e.parameter);
    }
    if (action === "check") {
      return handleStatusCheck(e.parameter);
    }
    if (action === "setup-webhook") {
      return setupTelegramWebhook();
    }
    if (action === "test") {
      return jsonResponse({ ok: true, message: "Claude Mastery Admin API is running!" });
    }
    return jsonResponse({ error: "Unknown action. Use: submit, check, setup-webhook, test" });
  } catch (err) {
    return jsonResponse({ error: err.message });
  }
}

// ═══════════════════════════════════════════════════════════════════════
// 3. XỬ LÝ REQUEST POST (Telegram Webhook Callbacks)
// ═══════════════════════════════════════════════════════════════════════
function doPost(e) {
  try {
    const update = JSON.parse(e.postData.contents);

    // Xử lý khi Admin bấm nút inline trên Telegram
    if (update.callback_query) {
      handleCallbackQuery(update.callback_query);
    }
  } catch (err) {
    Logger.log("doPost Error: " + err.message);
  }

  return ContentService.createTextOutput("OK");
}

// ═══════════════════════════════════════════════════════════════════════
// 4. GHI NHẬN THANH TOÁN + GỬI TELEGRAM
// ═══════════════════════════════════════════════════════════════════════
function handlePaymentSubmission(params) {
  const name = params.name || "N/A";
  const email = (params.email || "N/A").toLowerCase().trim();
  const phone = params.phone || "N/A";
  const transactionId = params.transactionId || "N/A";
  const price = params.price || "499000";

  // --- Kiểm tra chặn spam (Shadow Ban) ---
  if (isEmailBlocked(email)) {
    Logger.log("Email bị chặn (Shadow Ban): " + email);
    return jsonResponse({
      success: true,
      status: "pending",
      message: "Yêu cầu đã được ghi nhận. Admin sẽ xác nhận trong thời gian sớm nhất."
    });
  }

  // --- 4a. Lưu vào Google Sheet ---
  const sheet = getOrCreateSheet();
  const rowIndex = sheet.getLastRow() + 1;
  const timestamp = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");

  sheet.appendRow([
    timestamp,
    name,
    email,
    phone,
    transactionId,
    price,
    "Pending",
    "" // Ghi chú
  ]);

  // --- 4b. Gửi thông báo Telegram với nút Duyệt / Từ chối ---
  sendTelegramNotification(name, email, phone, transactionId, price, timestamp);

  return jsonResponse({
    success: true,
    status: "pending",
    message: "Yêu cầu đã được ghi nhận. Admin sẽ xác nhận trong thời gian sớm nhất."
  });
}

// ═══════════════════════════════════════════════════════════════════════
// 5. KIỂM TRA TRẠNG THÁI KÍCH HOẠT
// ═══════════════════════════════════════════════════════════════════════
function handleStatusCheck(params) {
  const email = (params.email || "").toLowerCase().trim();
  if (!email) return jsonResponse({ active: false, reason: "No email provided" });

  const sheet = getOrCreateSheet();
  const data = sheet.getDataRange().getValues();

  // Tìm từ dưới lên (giao dịch mới nhất)
  for (let i = data.length - 1; i >= 1; i--) {
    const rowEmail = (data[i][2] || "").toLowerCase().trim();
    const rowStatus = (data[i][6] || "").toString().trim();
    if (rowEmail === email && rowStatus === "Active") {
      return jsonResponse({ active: true });
    }
  }

  return jsonResponse({ active: false });
}

// ═══════════════════════════════════════════════════════════════════════
// 6. GỬI THÔNG BÁO TELEGRAM VỚI NÚT DUYỆT / TỪ CHỐI
// ═══════════════════════════════════════════════════════════════════════
function sendTelegramNotification(name, email, phone, txId, price, timestamp) {
  const priceFormatted = Number(price).toLocaleString("vi-VN");

  const message =
    "🔔 *YÊU CẦU KÍCH HOẠT PREMIUM*\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━\n\n" +
    "👤 *Học viên:* " + escTg(name) + "\n" +
    "📧 *Email:* `" + escTg(email) + "`\n" +
    "📱 *SĐT:* " + escTg(phone) + "\n" +
    "🏷️ *Mã GD:* `" + escTg(txId) + "`\n" +
    "💰 *Số tiền:* " + priceFormatted + " đ\n" +
    "⏰ *Thời gian:* " + escTg(timestamp) + "\n\n" +
    "━━━━━━━━━━━━━━━━━━━━━━━━\n" +
    "Bấm nút bên dưới để phê duyệt:";

  // callback_data giới hạn 64 bytes → dùng "A:txId", "R:txId" và "B:txId" (B là Block)
  const keyboard = {
    inline_keyboard: [
      [
        { text: "✅ DUYỆT", callback_data: "A:" + txId },
        { text: "❌ TỪ CHỐI", callback_data: "R:" + txId },
        { text: "🚫 CHẶN SPAM", callback_data: "B:" + txId }
      ]
    ]
  };

  telegramAPI("sendMessage", {
    chat_id: CONFIG.TELEGRAM_ADMIN_CHAT_ID,
    text: message,
    parse_mode: "Markdown",
    reply_markup: keyboard
  });
}

// ═══════════════════════════════════════════════════════════════════════
// 7. XỬ LÝ KHI ADMIN BẤM NÚT DUYỆT / TỪ CHỐI
// ═══════════════════════════════════════════════════════════════════════
function handleCallbackQuery(callbackQuery) {
  const data = callbackQuery.data || "";
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id;
  const originalText = callbackQuery.message.text || "";

  // Parse "A:CL7544" → action = "A", txId = "CL7544"
  const colonIndex = data.indexOf(":");
  if (colonIndex === -1) return;

  const action = data.substring(0, colonIndex);
  const txId = data.substring(colonIndex + 1);

  // Tìm email từ Sheet theo Transaction ID
  const sheet = getOrCreateSheet();
  const allData = sheet.getDataRange().getValues();
  let targetEmail = "";
  let targetRow = -1;
  let targetName = "";

  for (let i = allData.length - 1; i >= 1; i--) {
    if ((allData[i][4] || "") === txId && (allData[i][6] || "") === "Pending") {
      targetEmail = allData[i][2];
      targetName = allData[i][1];
      targetRow = i + 1; // Sheet rows are 1-indexed
      break;
    }
  }

  if (targetRow === -1) {
    answerCallbackQuery(callbackQuery.id, "⚠️ Không tìm thấy giao dịch " + txId + " hoặc đã xử lý trước đó.");
    return;
  }

  const now = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "HH:mm dd/MM/yyyy");

  if (action === "A") {
    // ✅ DUYỆT
    // Cập nhật Google Sheet
    sheet.getRange(targetRow, 7).setValue("Active");
    sheet.getRange(targetRow, 8).setValue("Duyệt lúc " + now);

    // Cập nhật Supabase profiles → purchased = true
    const supabaseResult = updateSupabaseProfile(targetEmail, true);

    // Cập nhật tin nhắn Telegram (xóa nút, thêm trạng thái)
    const updatedText = originalText +
      "\n\n✅ *ĐÃ DUYỆT PREMIUM*" +
      "\n🕐 " + now +
      (supabaseResult ? "\n📦 Supabase đã cập nhật thành công" : "\n⚠️ Lỗi cập nhật Supabase – kiểm tra lại");

    editTelegramMessage(chatId, messageId, updatedText);
    answerCallbackQuery(callbackQuery.id, "✅ Đã duyệt Premium cho " + targetName + " (" + targetEmail + ")");

  } else if (action === "R") {
    // ❌ TỪ CHỐI
    sheet.getRange(targetRow, 7).setValue("Rejected");
    sheet.getRange(targetRow, 8).setValue("Từ chối lúc " + now);

    const updatedText = originalText +
      "\n\n❌ *ĐÃ TỪ CHỐI*" +
      "\n🕐 " + now;

    editTelegramMessage(chatId, messageId, updatedText);
    answerCallbackQuery(callbackQuery.id, "❌ Đã từ chối yêu cầu của " + targetName);

  } else if (action === "B") {
    // 🚫 CHẶN SPAM
    sheet.getRange(targetRow, 7).setValue("Blocked");
    sheet.getRange(targetRow, 8).setValue("Đã chặn lúc " + now);

    // Ghi vào sheet Blocklist
    const blockSheet = getOrCreateBlocklistSheet();
    blockSheet.appendRow([targetEmail, now, "Spam yêu cầu kích hoạt"]);

    const updatedText = originalText +
      "\n\n🚫 *ĐÃ CHẶN HỌC VIÊN & BÁO SPAM*" +
      "\n🕐 " + now +
      "\n📧 Email `" + targetEmail + "` đã bị đưa vào danh sách đen (Blacklist). Mọi yêu cầu sau này từ email này sẽ bị chặn ngầm.";

    editTelegramMessage(chatId, messageId, updatedText);
    answerCallbackQuery(callbackQuery.id, "🚫 Đã chặn và đưa " + targetEmail + " vào danh sách đen.");
  }
}

// ═══════════════════════════════════════════════════════════════════════
// 8. CẬP NHẬT SUPABASE DATABASE
// ═══════════════════════════════════════════════════════════════════════
function updateSupabaseProfile(email, purchasedValue) {
  if (!CONFIG.SUPABASE_URL || !CONFIG.SUPABASE_ANON_KEY) {
    Logger.log("Supabase URL hoặc Anon Key chưa được cấu hình.");
    return false;
  }

  try {
    const url = CONFIG.SUPABASE_URL + "/rest/v1/rpc/activate_premium";

    const response = UrlFetchApp.fetch(url, {
      method: "post",
      contentType: "application/json",
      headers: {
        "apikey": CONFIG.SUPABASE_ANON_KEY,
        "Authorization": "Bearer " + CONFIG.SUPABASE_ANON_KEY
      },
      payload: JSON.stringify({
        target_email: email,
        secret_token: CONFIG.SUPABASE_RPC_SECRET,
        purchased_val: purchasedValue
      }),
      muteHttpExceptions: true
    });

    const code = response.getResponseCode();
    if (code >= 200 && code < 300) {
      Logger.log("Supabase RPC updated: " + email + " → " + purchasedValue);
      return true;
    } else {
      Logger.log("Supabase RPC error " + code + ": " + response.getContentText());
      return false;
    }
  } catch (err) {
    Logger.log("Supabase RPC exception: " + err.message);
    return false;
  }
}

// ═══════════════════════════════════════════════════════════════════════
// 9. TELEGRAM API HELPERS
// ═══════════════════════════════════════════════════════════════════════
function telegramAPI(method, payload) {
  const url = "https://api.telegram.org/bot" + CONFIG.TELEGRAM_BOT_TOKEN + "/" + method;
  try {
    return UrlFetchApp.fetch(url, {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    });
  } catch (err) {
    Logger.log("Telegram API error [" + method + "]: " + err.message);
    return null;
  }
}

function editTelegramMessage(chatId, messageId, text) {
  telegramAPI("editMessageText", {
    chat_id: chatId,
    message_id: messageId,
    text: text,
    parse_mode: "Markdown"
  });
}

function answerCallbackQuery(callbackQueryId, text) {
  telegramAPI("answerCallbackQuery", {
    callback_query_id: callbackQueryId,
    text: text,
    show_alert: true
  });
}

// ═══════════════════════════════════════════════════════════════════════
// 10. CÀI ĐẶT TELEGRAM WEBHOOK (Chạy 1 lần sau khi Deploy)
// ═══════════════════════════════════════════════════════════════════════
function setupTelegramWebhook() {
  const scriptUrl = ScriptApp.getService().getUrl();
  const url = "https://api.telegram.org/bot" + CONFIG.TELEGRAM_BOT_TOKEN +
              "/setWebhook?url=" + encodeURIComponent(scriptUrl);

  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  const result = JSON.parse(response.getContentText());

  Logger.log("Webhook setup result: " + JSON.stringify(result));

  return jsonResponse({
    success: result.ok,
    webhook_url: scriptUrl,
    telegram_response: result
  });
}

// Hàm tiện ích: Gỡ webhook (nếu cần debug)
function removeTelegramWebhook() {
  const url = "https://api.telegram.org/bot" + CONFIG.TELEGRAM_BOT_TOKEN + "/deleteWebhook";
  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  Logger.log("Webhook removed: " + response.getContentText());
}

// Hàm tiện ích: Kiểm tra thông tin webhook hiện tại
function getWebhookInfo() {
  const url = "https://api.telegram.org/bot" + CONFIG.TELEGRAM_BOT_TOKEN + "/getWebhookInfo";
  const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
  Logger.log("Webhook info: " + response.getContentText());
}

// ═══════════════════════════════════════════════════════════════════════
// 11. SHEET HELPERS
// ═══════════════════════════════════════════════════════════════════════
function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.SHEET_NAME);
    // Tạo header row
    const headers = ["Thời gian", "Họ tên", "Email", "SĐT", "Mã GD", "Số tiền", "Trạng thái", "Ghi chú"];
    sheet.appendRow(headers);

    // Format header
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#1a1a2e");
    headerRange.setFontColor("#f5c84c");

    // Set column widths
    sheet.setColumnWidth(1, 160); // Thời gian
    sheet.setColumnWidth(2, 150); // Họ tên
    sheet.setColumnWidth(3, 220); // Email
    sheet.setColumnWidth(4, 120); // SĐT
    sheet.setColumnWidth(5, 80);  // Mã GD
    sheet.setColumnWidth(6, 100); // Số tiền
    sheet.setColumnWidth(7, 100); // Trạng thái
    sheet.setColumnWidth(8, 200); // Ghi chú

    // Freeze header
    sheet.setFrozenRows(1);
  }

  return sheet;
}

// ═══════════════════════════════════════════════════════════════════════
// 12. UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Escape markdown special characters for Telegram
function escTg(str) {
  if (!str) return "";
  return str.toString()
    .replace(/\*/g, "")
    .replace(/_/g, "\\_")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]");
}

// ═══════════════════════════════════════════════════════════════════════
// 13. HÀM TEST (chạy thủ công trong Script Editor để kiểm tra)
// ═══════════════════════════════════════════════════════════════════════
function testSendTelegram() {
  const now = Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
  sendTelegramNotification(
    "Test User",
    "test@example.com",
    "0912345678",
    "CL0000",
    "499000",
    now
  );
  Logger.log("✅ Test notification sent! Check your Telegram.");
}

function testCheckStatus() {
  const result = handleStatusCheck({ email: "test@example.com" });
  Logger.log("Check result: " + result.getContent());
}

// ═══════════════════════════════════════════════════════════════════════
// 14. HÀM PHỤ TRỢ QUẢN LÝ BLOCKLIST
// ═══════════════════════════════════════════════════════════════════════
function getOrCreateBlocklistSheet() {
  const ss = SpreadsheetApp.openById(CONFIG.SPREADSHEET_ID);
  let sheet = ss.getSheetByName(CONFIG.BLOCKLIST_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(CONFIG.BLOCKLIST_SHEET_NAME);
    sheet.appendRow(["Email", "Blocked At", "Reason"]);
    // Format header
    sheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#ffcccc");
    sheet.setColumnWidth(1, 250);
    sheet.setColumnWidth(2, 150);
    sheet.setColumnWidth(3, 200);
  }
  return sheet;
}

function isEmailBlocked(email) {
  if (!email) return false;
  const cleanEmail = email.toLowerCase().trim();
  try {
    const sheet = getOrCreateBlocklistSheet();
    const data = sheet.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      const blockedEmail = (data[i][0] || "").toLowerCase().trim();
      if (blockedEmail === cleanEmail) {
        return true;
      }
    }
  } catch (err) {
    Logger.log("Lỗi kiểm tra blocklist: " + err.message);
  }
  return false;
}
