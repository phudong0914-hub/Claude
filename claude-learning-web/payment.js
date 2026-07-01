(function () {
  // 1. Core State
  let purchased = (typeof checkPremiumStatus === "function") ? checkPremiumStatus() : false;
  let activeTab = "vietqr"; // "vietqr" or "promo"
  let timerInterval = null;
  const price = 499000;
  const bankAccount = "106874110165";
  const bankName = "VietinBank";
  const accountName = "VO THANH TRUNG";
  
  // Google Sheets Apps Script Web App URL
  const googleScriptUrl = "https://script.google.com/macros/s/AKfycbwfmP7PE_tXm2D-VrCMEYR4rw1bam4jQ4SI8LUuorlP4oyxB6Cmi_xHM2B3uo5OxwQF/exec";

  // Generate a random transaction code (e.g., CL947285)
  const transactionId = `CL${Math.floor(100000 + Math.random() * 900000)}`;

  // 2. Access Control Helper
  function isLessonLocked(lessonId) {
    if (purchased) return false;
    const num = parseInt(lessonId, 10);
    return num > 5; // Lock lessons from 06 onwards
  }

  // 3. String normalization for VietQR AddInfo
  function removeVietnameseTones(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/\u0300|\u0301|\u0309|\u0303|\u0327/g, "");
    str = str.replace(/\u02C6|\u0306|\u031B/g, "");
    str = str.replace(/\s+/g, " ");
    return str.trim();
  }

  // 4. Copy to Clipboard Utility
  function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = btn.innerHTML;
      btn.innerHTML = '✓ Đã copy';
      btn.style.color = '#00ff66';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.color = '';
      }, 1500);
    }).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand("copy");
        const originalText = btn.innerHTML;
        btn.innerHTML = '✓ Đã copy';
        btn.style.color = '#00ff66';
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 1500);
      } catch (err) {
        alert("Không thể sao chép tự động. Hãy sao chép thủ công.");
      }
      document.body.removeChild(textarea);
    });
  }

  // 5. Build and Inject Sidebar Promo Card
  function injectSidebarPromo() {
    const progressCard = document.querySelector(".progress-card");
    if (!progressCard) return;

    // Clean old nodes
    document.getElementById("premiumPromoCard")?.remove();
    document.getElementById("premiumActiveBadge")?.remove();

    if (!purchased) {
      const promoHTML = `
        <div class="premium-activation-card" id="premiumPromoCard">
          <div class="promo-badge">PRO STACK</div>
          <h4>Mở khóa 55 bài học</h4>
          <p>Học thực chiến Claude, nhận agents & chứng chỉ Alpha AI.</p>
          <button class="btn-glowing-gold" id="sidebarBuyBtn" type="button">Kích hoạt Premium</button>
        </div>
      `;
      progressCard.insertAdjacentHTML("afterend", promoHTML);
      document.getElementById("sidebarBuyBtn").addEventListener("click", showPaymentModal);
    } else {
      const activeHTML = `
        <div class="premium-active-badge" id="premiumActiveBadge">
          <span class="badge-icon">👑</span> Premium Activated
        </div>
      `;
      progressCard.insertAdjacentHTML("afterend", activeHTML);
    }
  }

  // 6. Draw Modal Layout
  function showPaymentModal() {
    // If modal already exists, don't recreate
    if (document.getElementById("paymentModalOverlay")) return;

    const modalHTML = `
      <div class="payment-modal-overlay" id="paymentModalOverlay">
        <div class="payment-modal-card">
          
          <div class="payment-modal-header">
            <h3>🔑 KÍCH HOẠT CLAUDE MASTERY PREMIUM</h3>
            <button class="payment-close-btn" id="paymentCloseBtn" type="button" aria-label="Đóng">&times;</button>
          </div>

          <div class="payment-modal-body">
            
            <!-- Cột Trái: Quyền lợi & Form Thông tin -->
            <div class="payment-modal-left">
              <div class="premium-benefits">
                <div class="benefit-item">
                  <span class="benefit-icon">🎓</span>
                  <div class="benefit-text">
                    <strong>Mở khóa trọn bộ 55 bài học</strong>
                    <span>Học đầy đủ lộ trình Nền tảng, Prompt thực chiến, Claude Co-work và Claude Code.</span>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">📁</span>
                  <div class="benefit-text">
                    <strong>Tải xuống toàn bộ tài liệu cao cấp</strong>
                    <span>Mở khóa nút tải Sổ tay, bộ 55 ảnh bài giảng OCR, và file NotebookLM Prompts.</span>
                  </div>
                </div>
                <div class="benefit-item">
                  <span class="benefit-icon">🤖</span>
                  <div class="benefit-text">
                    <strong>Bộ 4 AI Agents trợ học nâng cao</strong>
                    <span>Dùng các prompt chuyên sâu để biến Claude/Antigravity thành tutor, reviewer của bạn.</span>
                  </div>
                </div>

              </div>

              <!-- Tabs thanh toán -->
              <div class="payment-tabs">
                <button class="payment-tab-btn active" id="tabBtnVietQR" type="button">Chuyển khoản VietQR</button>
                <button class="payment-tab-btn" id="tabBtnPromo" type="button">Nhập mã kích hoạt</button>
              </div>

              <!-- Panel 1: Form chuyển khoản VietQR -->
              <div class="payment-tab-panel active" id="panelVietQR">
                <div class="payment-form">
                  <div class="payment-form-group">
                    <label for="paymentName">Họ và tên của bạn</label>
                    <input class="payment-input" id="paymentName" type="text" placeholder="Ví dụ: Nguyen Van A" required>
                  </div>
                  <div class="payment-form-group">
                    <label for="paymentEmail">Địa chỉ Email</label>
                    <input class="payment-input" id="paymentEmail" type="email" placeholder="Ví dụ: name@example.com" required>
                  </div>
                  <div class="payment-form-group">
                    <label for="paymentPhone">Số điện thoại</label>
                    <input class="payment-input" id="paymentPhone" type="tel" placeholder="Ví dụ: 0912345678" required>
                  </div>
                </div>
              </div>

              <!-- Panel 2: Mã khuyến mãi / Kích hoạt -->
              <div class="payment-tab-panel" id="panelPromo">
                <div class="promo-code-container">
                  <div class="promo-code-box">
                    <div class="payment-form-group">
                      <label for="promoInput">Mã kích hoạt khóa học</label>
                      <input class="payment-input" id="promoInput" type="text" placeholder="Nhập mã kích hoạt tại đây...">
                    </div>
                    <p class="promo-hint">Nếu bạn mua trực tiếp từ giảng viên, hãy nhập mã kích hoạt nhận được. Để thử nghiệm nhanh, bạn có thể sử dụng các code kiểm thử: <code>CLAUDEPRO2026</code>, <code>TRUNGVT99</code>, <code>ALPHAAI</code>.</p>
                    <div class="promo-error-msg" id="promoError">Mã kích hoạt không đúng hoặc đã hết hạn!</div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Cột Phải: Thanh toán động -->
            <div class="payment-modal-right">
              
              <!-- Content của VietQR -->
              <div class="qr-container" id="qrContainer">
                <div class="qr-box" id="qrBox">
                  <span class="qr-placeholder-text">Điền họ tên và email ở bên trái để sinh mã QR thanh toán động</span>
                </div>
                
                <div class="bank-details" id="bankDetails" style="display: none;">
                  <div class="bank-row">
                    <span>Ngân hàng</span>
                    <span>${bankName}</span>
                  </div>
                  <div class="bank-row">
                    <span>Số tài khoản</span>
                    <span>${bankAccount} <button class="copy-icon-btn" id="copyAccBtn" type="button">Copy</button></span>
                  </div>
                  <div class="bank-row">
                    <span>Chủ tài khoản</span>
                    <span>${accountName}</span>
                  </div>
                  <div class="bank-row">
                    <span>Số tiền</span>
                    <span>${price.toLocaleString("vi-VN")} đ <button class="copy-icon-btn" id="copyAmountBtn" type="button">Copy</button></span>
                  </div>
                  <div class="bank-row">
                    <span>Nội dung CK</span>
                    <span><strong id="displayAddInfo">...</strong> <button class="copy-icon-btn" id="copyInfoBtn" type="button">Copy</button></span>
                  </div>
                </div>

                <div class="timer-box" id="timerBox" style="display: none;">
                  <span>Đơn hàng hết hạn sau: <span class="timer-count" id="timerCount">10:00</span></span>
                  <div class="timer-progress-bar">
                    <div class="timer-progress-fill" id="timerProgressFill"></div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary btn-glowing-gold" id="actionBtn" type="button" style="margin-top: 20px;">Xác nhận kích hoạt</button>

            </div>

          </div>

        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalHTML);

    // Bind Close event
    document.getElementById("paymentCloseBtn").addEventListener("click", closePaymentModal);
    
    // Bind Tab switching events
    const tabVietQR = document.getElementById("tabBtnVietQR");
    const tabPromo = document.getElementById("tabBtnPromo");
    const panelVietQR = document.getElementById("panelVietQR");
    const panelPromo = document.getElementById("panelPromo");
    const qrContainer = document.getElementById("qrContainer");
    const actionBtn = document.getElementById("actionBtn");

    tabVietQR.addEventListener("click", () => {
      activeTab = "vietqr";
      tabVietQR.classList.add("active");
      tabPromo.classList.remove("active");
      panelVietQR.classList.add("active");
      panelPromo.classList.remove("active");
      qrContainer.style.display = "flex";
      updateActionButtonState();
    });

    tabPromo.addEventListener("click", () => {
      activeTab = "promo";
      tabPromo.classList.add("active");
      tabVietQR.classList.remove("active");
      panelPromo.classList.add("active");
      panelVietQR.classList.remove("active");
      qrContainer.style.display = "none";
      updateActionButtonState();
    });

    // Inputs dynamic validation for QR generation
    const nameInput = document.getElementById("paymentName");
    const emailInput = document.getElementById("paymentEmail");
    const phoneInput = document.getElementById("paymentPhone");
    const promoInput = document.getElementById("promoInput");

    // Tự động điền thông tin tài khoản đăng nhập và khóa ô Email để tránh gõ sai chính tả
    const session = (typeof window.getCurrentSession === "function") ? window.getCurrentSession() : null;
    const profile = (typeof window.getCurrentUserProfile === "function") ? window.getCurrentUserProfile() : null;
    if (session && session.user) {
      emailInput.value = session.user.email;
      emailInput.readOnly = true;
      emailInput.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
      emailInput.style.cursor = "not-allowed";
      emailInput.title = "Email đăng nhập được tự động khóa để khớp với hệ thống kích hoạt";
      
      if (profile) {
        if (profile.full_name) nameInput.value = profile.full_name;
        if (profile.phone) phoneInput.value = profile.phone;
      }
    }

    nameInput.addEventListener("input", triggerQRGeneration);
    emailInput.addEventListener("input", triggerQRGeneration);
    phoneInput.addEventListener("input", triggerQRGeneration);

    function triggerQRGeneration() {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();

      const qrBox = document.getElementById("qrBox");
      const bankDetails = document.getElementById("bankDetails");
      const timerBox = document.getElementById("timerBox");
      const displayAddInfo = document.getElementById("displayAddInfo");

      // Validate email format and phone format (Vietnam 10-digit phone number starting with 03, 05, 07, 08, 09)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^(0[3|5|7|8|9])\d{8}$/;

      const isEmailValid = emailRegex.test(email);
      const isPhoneValid = phoneRegex.test(phone);

      if (name && isEmailValid && isPhoneValid) {
        // Normalize name
        const cleanName = removeVietnameseTones(name).toUpperCase().replace(/[^A-Z\s]/g, "");
        const formattedAddInfo = `CLAUDE ${cleanName.replace(/\s+/g, "")} ${transactionId}`;
        
        // Dynamic VietQR API endpoint
        const qrUrl = `https://img.vietqr.io/image/VietinBank-${bankAccount}-qr_only.png?amount=${price}&addInfo=${encodeURIComponent(formattedAddInfo)}&accountName=${encodeURIComponent(accountName)}`;
        
        qrBox.innerHTML = `<img class="qr-image" src="${qrUrl}" alt="Mã thanh toán VietQR">`;
        displayAddInfo.textContent = formattedAddInfo;
        
        bankDetails.style.display = "block";
        timerBox.style.display = "block";
        
        // Start countdown (10 minutes)
        startCountdown(600);
      } else {
        let msg = "Điền họ tên, số điện thoại và email đúng chuẩn ở bên trái để sinh mã QR thanh toán động";
        if (email && !isEmailValid) {
          msg = "Địa chỉ email không đúng định dạng!";
        } else if (phone && !isPhoneValid) {
          msg = "Số điện thoại không đúng định dạng (phải có 10 chữ số và bắt đầu bằng 03, 05, 07, 08, 09)!";
        }
        qrBox.innerHTML = `<span class="qr-placeholder-text">${msg}</span>`;
        bankDetails.style.display = "none";
        timerBox.style.display = "none";
        if (timerInterval) clearInterval(timerInterval);
      }
      updateActionButtonState();
    }

    // Copy Events
    document.getElementById("copyAccBtn").onclick = (e) => copyText(bankAccount, e.target);
    document.getElementById("copyAmountBtn").onclick = (e) => copyText(price.toString(), e.target);
    document.getElementById("copyInfoBtn").onclick = (e) => {
      const displayAddInfo = document.getElementById("displayAddInfo");
      copyText(displayAddInfo.textContent, e.target);
    };

    // Confirm Payment & Code Submission Event
    actionBtn.onclick = () => {
      if (activeTab === "vietqr") {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(0[3|5|7|8|9])\d{8}$/;

        if (!name || !emailRegex.test(email) || !phoneRegex.test(phone)) {
          alert("Vui lòng điền đầy đủ họ tên, số điện thoại và email đúng định dạng để chúng tôi đối soát thanh toán!");
          return;
        }

        // Simulating Bank Reconciliation
        showVerificationProgress();
      } else {
        const code = promoInput.value.trim().toUpperCase();
        if (!code) {
          alert("Vui lòng nhập mã kích hoạt của bạn!");
          return;
        }

        const validCodes = ["CLAUDEPRO2026", "TRUNGVT99", "ALPHAAI"];
        const promoError = document.getElementById("promoError");

        if (validCodes.includes(code)) {
          promoError.style.display = "none";
          triggerInstantActivation();
        } else {
          promoError.style.display = "block";
        }
      }
    };

    // Action button visual updates
    function updateActionButtonState() {
      if (activeTab === "vietqr") {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^(0[3|5|7|8|9])\d{8}$/;

        if (name && emailRegex.test(email) && phoneRegex.test(phone)) {
          actionBtn.textContent = "Tôi đã chuyển khoản";
          actionBtn.disabled = false;
        } else {
          actionBtn.textContent = "Điền đúng thông tin để thanh toán";
          actionBtn.disabled = true;
        }
      } else {
        actionBtn.textContent = "Kích hoạt bằng mã";
        actionBtn.disabled = false;
      }
    }

    updateActionButtonState();
  }

  function startCountdown(durationSeconds) {
    if (timerInterval) clearInterval(timerInterval);
    let timeRemaining = durationSeconds;
    const timerCount = document.getElementById("timerCount");
    const progressFill = document.getElementById("timerProgressFill");

    function update() {
      const minutes = Math.floor(timeRemaining / 60);
      const seconds = timeRemaining % 60;
      if (timerCount) {
        timerCount.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
      }
      
      const percent = (timeRemaining / durationSeconds) * 100;
      if (progressFill) {
        progressFill.style.width = `${percent}%`;
        if (percent < 20) {
          progressFill.style.backgroundColor = "#ff5252";
        }
      }

      if (timeRemaining <= 0) {
        clearInterval(timerInterval);
        if (timerCount) timerCount.textContent = "Mã hết hạn";
        if (progressFill) progressFill.style.width = "0%";
      }
      timeRemaining--;
    }
    
    update();
    timerInterval = setInterval(update, 1000);
  }

  function showVerificationProgress() {
    const card = document.querySelector(".payment-modal-card");
    const nameInput = document.getElementById("paymentName");
    const emailInput = document.getElementById("paymentEmail");
    const phoneInput = document.getElementById("paymentPhone");
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    // ─── CASE 1: Google Apps Script đã cấu hình (Telegram Bot notification) ───
    // Luồng chuẩn: Gửi thông tin → Apps Script log vào Sheet + gửi Telegram → Hiển thị Pending
    if (googleScriptUrl) {
      const checkingHTML = `
        <div class="checking-overlay" id="checkingOverlay">
          <div class="payment-spinner"></div>
          <h4>Đang gửi yêu cầu kích hoạt...</h4>
          <p>Hệ thống đang gửi thông tin thanh toán của bạn đến quản trị viên qua Telegram.</p>
        </div>
      `;
      card.insertAdjacentHTML("beforeend", checkingHTML);

      const submitUrl = `${googleScriptUrl}?action=submit&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&transactionId=${encodeURIComponent(transactionId)}&price=${price}`;

      fetch(submitUrl, { method: "GET", mode: "cors" })
        .then(res => res.json())
        .then(data => {
          document.getElementById("checkingOverlay")?.remove();
          showPendingActivationScreen(name, email, phone);
        })
        .catch(err => {
          console.error("Error submitting to Google Apps Script:", err);
          document.getElementById("checkingOverlay")?.remove();
          // Vẫn hiển thị Pending screen dù có lỗi kết nối
          showPendingActivationScreen(name, email, phone);
        });
      return;
    }

    // ─── CASE 2: Chỉ có Supabase (chưa cấu hình Google Script / Telegram) ───
    if (typeof isSupabaseConfigured !== "undefined" && isSupabaseConfigured) {
      const checkingHTML = `
        <div class="checking-overlay" id="checkingOverlay">
          <div class="payment-spinner"></div>
          <h4>Đang gửi yêu cầu kích hoạt...</h4>
          <p>Hệ thống đang xử lý và khởi tạo yêu cầu kích hoạt tài khoản của bạn.</p>
        </div>
      `;
      card.insertAdjacentHTML("beforeend", checkingHTML);
      
      setTimeout(() => {
        document.getElementById("checkingOverlay")?.remove();
        showPendingActivationScreen(name, email, phone);
      }, 1500);
      return;
    }

    // ─── CASE 3: Demo Mode Offline (không Supabase, không Google Script) ───
    const checkingHTML = `
      <div class="checking-overlay" id="checkingOverlay">
        <div class="payment-spinner"></div>
        <h4>Đang xác thực thanh toán (Demo)...</h4>
        <p>Đang mô phỏng xác thực thanh toán trong chế độ offline (localStorage).</p>
      </div>
    `;
    card.insertAdjacentHTML("beforeend", checkingHTML);
    setTimeout(() => {
      document.getElementById("checkingOverlay")?.remove();
      triggerInstantActivation();
    }, 3000);
  }

  function showPendingActivationScreen(name, email, phone) {
    const card = document.querySelector(".payment-modal-card");
    // Remove existing success or pending overlays
    document.getElementById("pendingOverlay")?.remove();
    
    const pendingHTML = `
      <div class="success-overlay" id="pendingOverlay" style="background: linear-gradient(135deg, #0d1726, #07101d);">
        <div class="success-icon-wrapper" style="border-color: #f5c84c; color: #f5c84c; font-size: 30px;">⏳</div>
        <h4>ĐÃ GỬI YÊU CẦU THÀNH CÔNG!</h4>
        <p style="margin-bottom: 8px; font-size: 13px;">Thông tin kích hoạt tài khoản của bạn đã được ghi nhận.</p>
        <div style="background: rgba(255,255,255,0.03); padding: 12px; border-radius: 8px; font-size: 12px; text-align: left; margin-bottom: 16px; width: 100%; border: 1px solid rgba(255,255,255,0.05); color: #e5e7eb;">
          <div style="display:flex; justify-content:space-between; margin-bottom: 4px;"><span>Họ tên:</span><strong>${name}</strong></div>
          <div style="display:flex; justify-content:space-between; margin-bottom: 4px;"><span>Email:</span><strong>${email}</strong></div>
          <div style="display:flex; justify-content:space-between; margin-bottom: 4px;"><span>Số điện thoại:</span><strong>${phone}</strong></div>
          <div style="display:flex; justify-content:space-between; margin-bottom: 4px;"><span>Mã giao dịch:</span><strong>${transactionId}</strong></div>
          <div style="display:flex; justify-content:space-between;"><span>Trạng thái:</span><strong style="color: #f5c84c;">Chờ kích hoạt (Pending)</strong></div>
        </div>
        <p style="font-size: 11px; color: var(--color-text-secondary); margin-bottom: 16px; line-height: 1.5; text-align: center;">Quản trị viên sẽ đối soát giao dịch và chuyển trạng thái tài khoản thành Premium để mở khóa học của bạn.</p>
        <div style="display: flex; gap: 10px; width: 100%; justify-content: center;">
          <button class="btn btn-primary btn-glowing-gold" id="checkStatusBtn" type="button" style="min-width: 140px; margin: 0;">Kiểm tra kích hoạt</button>
          <button class="btn btn-outline" id="pendingCloseBtn" type="button" style="margin: 0; min-width: 80px;">Đóng</button>
        </div>
      </div>
    `;
    card.insertAdjacentHTML("beforeend", pendingHTML);

    const checkStatusBtn = document.getElementById("checkStatusBtn");
    checkStatusBtn.onclick = async () => {
      checkStatusBtn.textContent = "Đang kiểm tra...";
      checkStatusBtn.disabled = true;

      // If Supabase is configured, check status from Supabase
      if (typeof isSupabaseConfigured !== "undefined" && isSupabaseConfigured && typeof fetchUserProfile === "function" && typeof checkPremiumStatus === "function") {
        try {
          if (window.supabaseClientInstance && window.supabaseClientInstance.auth) {
            const { data: { session } } = await window.supabaseClientInstance.auth.getSession();
            if (session) {
              await fetchUserProfile(session.user);
              const active = checkPremiumStatus();
              if (active) {
                document.getElementById("pendingOverlay")?.remove();
                triggerInstantActivation();
                return;
              }
            }
          }
          alert("Tài khoản của bạn vẫn đang ở trạng thái Chờ kích hoạt (Pending). Vui lòng đợi quản trị viên duyệt trạng thái Premium trên hệ thống quản trị Supabase!");
        } catch (err) {
          console.error("Error checking Supabase profile:", err);
          alert("Không thể kiểm tra trạng thái từ máy chủ. Vui lòng liên hệ quản trị viên!");
        } finally {
          checkStatusBtn.textContent = "Kiểm tra kích hoạt";
          checkStatusBtn.disabled = false;
        }
        return;
      }

      // If Google Script is configured
      if (googleScriptUrl) {
        const checkUrl = `${googleScriptUrl}?action=check&email=${encodeURIComponent(email)}`;
        fetch(checkUrl, { method: "GET", mode: "cors" })
          .then(res => res.json())
          .then(data => {
            if (data && data.active === true) {
              document.getElementById("pendingOverlay")?.remove();
              triggerInstantActivation();
            } else {
              alert("Tài khoản của bạn vẫn đang ở trạng thái Chờ kích hoạt (Pending). Vui lòng đợi quản trị viên duyệt trạng thái thành 'Active' trên Google Sheet!");
              checkStatusBtn.textContent = "Kiểm tra kích hoạt";
              checkStatusBtn.disabled = false;
            }
          })
          .catch(err => {
            console.error("Error checking activation status:", err);
            alert("Tài khoản chưa được kích hoạt hoặc không thể kết nối đến máy chủ xác thực. Hãy thử lại sau ít phút!");
            checkStatusBtn.textContent = "Kiểm tra kích hoạt";
            checkStatusBtn.disabled = false;
          });
      } else {
        // Demo Mode fallback without Google Script
        alert("Chế độ Demo Offline: Vui lòng cấu hình Supabase hoặc Google Script để lưu trữ và phê duyệt giao dịch thực tế.");
        checkStatusBtn.textContent = "Kiểm tra kích hoạt";
        checkStatusBtn.disabled = false;
      }
    };

    document.getElementById("pendingCloseBtn").onclick = () => {
      closePaymentModal();
    };
  }

  function triggerInstantActivation() {
    if (typeof updateLocalProfilePurchased === "function") {
      updateLocalProfilePurchased(true);
    } else {
      localStorage.setItem("claude-course-purchased", "true");
    }
    purchased = true;

    // Show Success screen inside card
    const card = document.querySelector(".payment-modal-card");
    const successHTML = `
      <div class="success-overlay" id="successOverlay">
        <div class="success-icon-wrapper">✓</div>
        <h4>KÍCH HOẠT THÀNH CÔNG!</h4>
        <p>Chúc mừng bạn! Khóa học Claude Mastery của bạn đã được nâng cấp lên bản Premium vĩnh viễn.</p>
        <button class="btn btn-primary" id="successCloseBtn" type="button" style="min-width: 140px;">Bắt đầu học ngay</button>
      </div>
    `;
    card.insertAdjacentHTML("beforeend", successHTML);

    document.getElementById("successCloseBtn").onclick = () => {
      closePaymentModal();
      // Re-trigger visual updates
      injectSidebarPromo();
      if (typeof window.updateAll === "function") {
        window.updateAll();
      }
    };
  }

  function closePaymentModal() {
    if (timerInterval) clearInterval(timerInterval);
    document.getElementById("paymentModalOverlay")?.remove();
  }

  // 7. Hooking/Patching into app.js globals
  function applyHooks() {
    // A. Intercept window.setActiveLesson
    if (typeof window.setActiveLesson === "function") {
      const originalSetActiveLesson = window.setActiveLesson;
      window.setActiveLesson = function (id) {
        if (isLessonLocked(id)) {
          showPaymentModal();
        } else {
          originalSetActiveLesson(id);
        }
      };
    }

    // B. Intercept window.renderTree
    if (typeof window.renderTree === "function") {
      const originalRenderTree = window.renderTree;
      window.renderTree = function () {
        originalRenderTree();
        decorateTreeNodes();
      };
    }

    // Helper to decorate locks inside elements
    function decorateTreeNodes() {
      const nodes = document.querySelectorAll(".lesson-node");
      nodes.forEach((node) => {
        const id = node.dataset.lesson;
        if (isLessonLocked(id)) {
          node.classList.add("locked");
          if (!node.querySelector(".node-lock")) {
            const lockSpan = document.createElement("span");
            lockSpan.className = "node-lock";
            lockSpan.innerHTML = "🔒";
            node.appendChild(lockSpan);
          }
        } else {
          node.classList.remove("locked");
          node.querySelector(".node-lock")?.remove();
        }
      });
    }

    // C. Intercept premium downloads in hero section
    document.addEventListener("click", (e) => {
      const downloadBtn = e.target.closest(".download-btn");
      if (downloadBtn && !purchased) {
        e.preventDefault();
        showPaymentModal();
      }
    });
  }

  // 8. Initialization
  function init() {
    applyHooks();
    injectSidebarPromo();
    
    // Sync Supabase Auth status changes
    if (typeof onAuthStateChange === "function") {
      let lastUserId = undefined;
      let lastPurchased = undefined;
      
      onAuthStateChange(() => {
        const currentUserId = (typeof currentSession !== "undefined" && currentSession) ? currentSession.user.id : null;
        const currentPurchased = checkPremiumStatus();
        
        // Prevent infinite render loop by checking if the state has actually changed
        if (currentUserId !== lastUserId || currentPurchased !== lastPurchased) {
          lastUserId = currentUserId;
          lastPurchased = currentPurchased;
          
          purchased = currentPurchased;
          injectSidebarPromo();
          if (typeof window.updateAll === "function") {
            window.updateAll();
          }

          // Setup real-time subscription for automatic unlock
          if (currentUserId && typeof window.subscribeToProfileChanges === "function") {
            window.subscribeToProfileChanges((updatedProfile) => {
              if (updatedProfile && updatedProfile.purchased === true && !purchased) {
                console.log("[Realtime] Premium status activated! Unlocking platform...");
                document.getElementById("pendingOverlay")?.remove();
                triggerInstantActivation();
              }
            });
          }
        }
      });
    }

    // Initial UI refresh with hooks applied
    if (typeof window.updateAll === "function") {
      window.updateAll();
    }
  }

  // Execute initialization after document load or script execution
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
