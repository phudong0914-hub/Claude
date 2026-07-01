// Supabase Configuration & Helpers
const SUPABASE_URL = "https://jnqmfghlnyvrlqiepfac.supabase.co"; // Điền Supabase URL của bạn vào đây (ví dụ: "https://xxxxxx.supabase.co")
const SUPABASE_ANON_KEY = "sb_publishable_VZRfLai9Ee1BauvY8m_Ojg_0nLqWZhV"; // Điền Supabase Anon Key của bạn vào đây

let supabaseClientInstance = null;
let isSupabaseConfigured = false;

if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
  try {
    supabaseClientInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    window.supabaseClientInstance = supabaseClientInstance;
    isSupabaseConfigured = true;
    console.log("⚡ Supabase Client initialized successfully!");
  } catch (error) {
    console.error("❌ Failed to initialize Supabase Client:", error);
  }
} else {
  console.warn("⚠️ Supabase Credentials missing or library not loaded!");
}


// Global Auth State
let currentSession = null;
let currentUserProfile = null;

// Auth status change callbacks
const authCallbacks = [];
function onAuthStateChange(callback) {
  authCallbacks.push(callback);
}

function triggerAuthChange() {
  authCallbacks.forEach(cb => cb({ session: currentSession, profile: currentUserProfile }));
}

// Initialize Auth State on load
document.addEventListener("DOMContentLoaded", async () => {
  // Add CSS styles dynamically for Auth UI
  const style = document.createElement("style");
  style.innerHTML = `
    .auth-card {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 12px;
      margin: 10px 0;
      font-size: 13px;
    }
    .auth-title {
      font-weight: 600;
      color: var(--color-text-primary, #ffffff);
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .auth-badge {
      font-size: 10px;
      padding: 2px 6px;
      border-radius: 4px;
      font-weight: bold;
    }
    .auth-badge.premium {
      background: rgba(245, 200, 76, 0.2);
      color: #f5c84c;
      border: 1px solid rgba(245, 200, 76, 0.3);
    }
    .auth-badge.free {
      background: rgba(255, 255, 255, 0.1);
      color: #a1a1aa;
    }
    .auth-user-info {
      color: #a1a1aa;
      margin-bottom: 8px;
      word-break: break-all;
    }
    .auth-btn {
      width: 100%;
      padding: 6px 12px;
      border-radius: 6px;
      border: none;
      font-size: 12px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s ease;
      background: #3b82f6;
      color: white;
    }
    .auth-btn:hover {
      background: #2563eb;
    }
    .auth-btn.btn-signout {
      background: rgba(239, 68, 68, 0.2);
      color: #f87171;
      border: 1px solid rgba(239, 68, 68, 0.3);
    }
    .auth-btn.btn-signout:hover {
      background: rgba(239, 68, 68, 0.3);
    }
    .auth-form-input {
      width: 100%;
      padding: 6px 10px;
      margin-bottom: 8px;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      color: white;
      font-size: 12px;
    }
    .auth-form-input:focus {
      outline: none;
      border-color: #3b82f6;
    }
    .auth-password-wrapper {
      position: relative;
      margin-bottom: 8px;
    }
    .auth-password-wrapper .auth-form-input {
      margin-bottom: 0;
      padding-right: 34px;
    }
    .auth-toggle-password {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #71717a;
      transition: color 0.2s ease;
    }
    .auth-toggle-password:hover {
      color: #a1a1aa;
    }
    .auth-toggle-password svg {
      width: 16px;
      height: 16px;
    }
    .auth-tab-nav {
      display: flex;
      margin-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .auth-tab-btn {
      flex: 1;
      background: none;
      border: none;
      color: #71717a;
      padding: 4px;
      font-size: 11px;
      cursor: pointer;
    }
    .auth-tab-btn.active {
      color: #3b82f6;
      border-bottom: 2px solid #3b82f6;
      font-weight: 600;
    }
  `;
  document.head.appendChild(style);

  // Inject UI container in Sidebar
  const sidebarBrand = document.querySelector(".brand");
  if (sidebarBrand) {
    const authContainer = document.createElement("div");
    authContainer.id = "supabaseAuthSection";
    sidebarBrand.parentNode.insertBefore(authContainer, sidebarBrand.nextSibling);
  }

  if (isSupabaseConfigured) {
    // Listen for Auth changes
    supabaseClientInstance.auth.onAuthStateChange(async (event, session) => {
      await refreshAuthAndProfile(session);
    });

    // Initial session check
    supabaseClientInstance.auth.getSession().then(async ({ data: { session } }) => {
      await refreshAuthAndProfile(session);
    });
  } else {
    // Demo mode setup
    renderAuthUI();
  }
});

// Fetch user profile status from DB
async function fetchUserProfile(user) {
  console.log("fetchUserProfile start for user:", user.email);
  try {
    const { data, error } = await supabaseClientInstance
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      console.warn("fetchUserProfile database error:", error);
      // Profile might not exist yet, create it
      if (error.code === "PGRST116") {
        console.log("Profile not found, creating new profile...");
        const { data: newProfile, error: createError } = await supabaseClientInstance
          .from("profiles")
          .insert([{
            id: user.id,
            email: user.email,
            full_name: user.user_metadata?.full_name || null,
            phone: user.user_metadata?.phone || null,
            purchased: false
          }])
          .select()
          .single();
        
        if (!createError) {
          currentUserProfile = newProfile;
          console.log("Profile created successfully:", newProfile);
        } else {
          console.error("Profile creation error:", createError);
        }
      } else {
        console.error("Error fetching profile:", error);
      }
    } else {
      currentUserProfile = data;
      console.log("fetchUserProfile success. Profile data:", data);
    }
  } catch (err) {
    console.error("Error in fetchUserProfile:", err);
  }
}

// State change tracking to prevent infinite loop updates
let lastSessionId = undefined;
let lastProfilePurchased = undefined;
let lastProfileName = undefined;

async function refreshAuthAndProfile(session) {
  console.log("refreshAuthAndProfile start: session =", !!session);
  currentSession = session;
  if (session) {
    await fetchUserProfile(session.user);
  } else {
    currentUserProfile = null;
  }

  const currentSessionId = session ? session.user.id : null;
  const currentPurchased = currentUserProfile ? currentUserProfile.purchased : null;
  const currentName = currentUserProfile ? currentUserProfile.full_name : null;

  console.log("refreshAuthAndProfile checks:", {
    currentSessionId, lastSessionId,
    currentPurchased, lastProfilePurchased,
    currentName, lastProfileName
  });

  if (
    currentSessionId !== lastSessionId ||
    currentPurchased !== lastProfilePurchased ||
    currentName !== lastProfileName
  ) {
    console.log("refreshAuthAndProfile: state changed. Triggering updates.");
    lastSessionId = currentSessionId;
    lastProfilePurchased = currentPurchased;
    lastProfileName = currentName;

    triggerAuthChange();
    renderAuthUI();
    if (typeof window.updateAll === "function") window.updateAll();
  }
  console.log("refreshAuthAndProfile end");
}

// Check Premium status dynamically (Supabase or local storage fallback)
function checkPremiumStatus() {
  if (isSupabaseConfigured && currentSession) {
    return currentUserProfile && currentUserProfile.purchased === true;
  }
  // Fallback to local storage (demo mode or guest user before sign in)
  return localStorage.getItem("claude-course-purchased") === "true";
}

// Fetch premium lesson OCR / Content dynamically from Supabase DB
// Cache + circuit-breaker to prevent repeated failing API calls from freezing the browser
const _premiumCache = {};
let _premiumFetchErrors = 0;
let _premiumFetchPermanentlyDisabled = false; // permanently disable if table doesn't exist

async function fetchPremiumLessonContent(lessonId) {
  if (!isSupabaseConfigured) {
    // In Demo mode, read from client-side window.sourcePages
    return {
      ocr_content: window.sourcePages?.[parseInt(lessonId, 10)] || "Nội dung bài học mô phỏng hệ thống demo.",
      bonus_agent_content: null
    };
  }

  // Skip API call entirely if user is not logged in
  if (!currentSession) {
    return null;
  }

  // Permanently disabled: table doesn't exist or too many errors
  if (_premiumFetchPermanentlyDisabled) {
    return null;
  }

  // Return cached result if available
  if (_premiumCache[lessonId] !== undefined) {
    return _premiumCache[lessonId];
  }

  try {
    const { data, error, status } = await supabaseClientInstance
      .from("premium_lessons")
      .select("*")
      .eq("lesson_id", lessonId)
      .maybeSingle();

    // 406 = table doesn't exist or API not configured → disable permanently
    if (status === 406 || status === 404) {
      console.warn("premium_lessons table not available (HTTP " + status + "). Feature disabled.");
      _premiumFetchPermanentlyDisabled = true;
      return null;
    }

    if (error) {
      // PGRST116 = no rows found, this is normal - just cache null
      if (error.code === "PGRST116") {
        _premiumCache[lessonId] = null;
        return null;
      }
      console.warn("Error fetching premium lesson:", error.message || error.code);
      _premiumFetchErrors++;
      // After 3 errors, permanently disable
      if (_premiumFetchErrors >= 3) {
        console.warn("Too many premium_lessons errors. Feature permanently disabled for this session.");
        _premiumFetchPermanentlyDisabled = true;
      }
      _premiumCache[lessonId] = null;
      return null;
    }

    // Success: cache result
    _premiumFetchErrors = 0;
    _premiumCache[lessonId] = data;
    return data;
  } catch (err) {
    console.warn("Failed to fetch premium content:", err.message || err);
    _premiumFetchErrors++;
    if (_premiumFetchErrors >= 3) {
      _premiumFetchPermanentlyDisabled = true;
    }
    _premiumCache[lessonId] = null;
    return null;
  }
}

// Update local profile purchased status after successful client activation
async function updateLocalProfilePurchased(purchasedValue = true) {
  if (isSupabaseConfigured && currentSession) {
    const { data, error } = await supabaseClientInstance
      .from("profiles")
      .update({ purchased: purchasedValue })
      .eq("id", currentSession.user.id)
      .select()
      .single();

    if (!error && data) {
      currentUserProfile = data;
      // Sync tracking state to prevent redundant loops
      lastProfilePurchased = data.purchased;
      lastProfileName = data.full_name;

      triggerAuthChange();
      renderAuthUI();
      if (typeof window.updateAll === "function") window.updateAll();
    } else {
      console.error("Error updating profile status:", error);
    }
  } else {
    // Demo Mode
    localStorage.setItem("claude-course-purchased", purchasedValue ? "true" : "false");
    if (typeof window.updateAll === "function") window.updateAll();
  }
}

// Render Auth UI widget in sidebar
function renderAuthUI() {
  const container = document.getElementById("supabaseAuthSection");
  if (!container) return;

  if (!isSupabaseConfigured) {
    container.innerHTML = `
      <div class="auth-card">
        <div class="auth-title">
          <span>Hệ thống Demo</span>
          <span class="auth-badge free">OFFLINE</span>
        </div>
        <p style="margin: 0 0 8px; color: #a1a1aa; font-size: 11px; line-height: 1.4;">Chưa cấu hình Supabase. Web chạy ở chế độ demo offline sử dụng localStorage.</p>
      </div>
    `;
    return;
  }

  if (currentSession) {
    const email = currentSession.user.email;
    const isPremium = checkPremiumStatus();
    
    // Get profile display name or default to email prefix
    const profileName = (currentUserProfile && currentUserProfile.full_name) || email.split("@")[0];
    const initialLetter = profileName.charAt(0).toUpperCase();
    const avatarUrl = currentUserProfile && currentUserProfile.avatar_url;
    const avatarHTML = avatarUrl 
      ? `<img src="${avatarUrl}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`
      : initialLetter;

    container.innerHTML = `
      <div class="auth-card logged-in" id="sidebarProfileCard" style="cursor: pointer;" title="Xem trang cá nhân">
        <div class="user-avatar-row">
          <div class="user-avatar-circle" style="width: 40px; height: 40px; border-radius: 50%; overflow: hidden; display: flex; align-items: center; justify-content: center; flex-shrink: 0; background: linear-gradient(135deg, #e65c00, #f5c84c);">${avatarHTML}</div>
          <div class="user-info-text">
            <span class="user-display-name">${profileName}</span>
            <span class="user-role-badge ${isPremium ? 'premium' : 'free'}">${isPremium ? '💎 Premium' : 'Free Account'}</span>
          </div>
        </div>
        <div class="sidebar-action-hint">Trang cá nhân ➔</div>
      </div>
    `;

    document.getElementById("sidebarProfileCard").onclick = () => {
      if (typeof window.showDashboard === "function") {
        window.showDashboard();
      }
    };
  } else {
    // Show Sign In / Sign Up Form
    container.innerHTML = `
      <div class="auth-card" id="authCardTabs">
        <div class="auth-tab-nav">
          <button class="auth-tab-btn active" id="authTabSignIn">Đăng nhập</button>
          <button class="auth-tab-btn" id="authTabSignUp">Đăng ký</button>
        </div>
        
        <div id="authFormBody">
          <input type="email" id="authEmail" class="auth-form-input" placeholder="Email" required>
          <div class="auth-password-wrapper">
            <input type="password" id="authPassword" class="auth-form-input" placeholder="Mật khẩu" required>
            <button type="button" class="auth-toggle-password" id="authTogglePassword" title="Hiện/Ẩn mật khẩu">
              <svg id="eyeIconShow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              <svg id="eyeIconHide" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            </button>
          </div>
          <div id="authExtraFields" style="display: none;">
            <input type="text" id="authFullName" class="auth-form-input" placeholder="Tên hiển thị (VD: Nguyễn Văn A)">
            <input type="tel" id="authPhone" class="auth-form-input" placeholder="Số điện thoại (VD: 0901234567)">
          </div>
          <div id="authErrorMsg" style="color: #f87171; font-size: 11px; margin-bottom: 8px; display: none; line-height: 1.4;"></div>
          <div id="authSuccessMsg" style="color: #34d399; font-size: 11px; margin-bottom: 8px; display: none; line-height: 1.4;"></div>
          <button class="auth-btn" id="authSubmitBtn">Đăng nhập</button>
        </div>
      </div>
    `;

    let activeTab = "signin";

    const tabSignIn = document.getElementById("authTabSignIn");
    const tabSignUp = document.getElementById("authTabSignUp");
    const emailInput = document.getElementById("authEmail");
    const passInput = document.getElementById("authPassword");
    const submitBtn = document.getElementById("authSubmitBtn");
    const errorMsg = document.getElementById("authErrorMsg");
    const successMsg = document.getElementById("authSuccessMsg");
    const togglePasswordBtn = document.getElementById("authTogglePassword");
    const eyeShow = document.getElementById("eyeIconShow");
    const eyeHide = document.getElementById("eyeIconHide");
    const extraFields = document.getElementById("authExtraFields");

    togglePasswordBtn.onclick = () => {
      const isPassword = passInput.type === "password";
      passInput.type = isPassword ? "text" : "password";
      eyeShow.style.display = isPassword ? "none" : "block";
      eyeHide.style.display = isPassword ? "block" : "none";
    };

    tabSignIn.onclick = () => {
      activeTab = "signin";
      tabSignIn.classList.add("active");
      tabSignUp.classList.remove("active");
      submitBtn.textContent = "Đăng nhập";
      errorMsg.style.display = "none";
      successMsg.style.display = "none";
      extraFields.style.display = "none";
    };

    tabSignUp.onclick = () => {
      activeTab = "signup";
      tabSignUp.classList.add("active");
      tabSignIn.classList.remove("active");
      submitBtn.textContent = "Đăng ký tài khoản";
      errorMsg.style.display = "none";
      successMsg.style.display = "none";
      extraFields.style.display = "block";
    };

    submitBtn.onclick = async () => {
      const email = emailInput.value.trim();
      const password = passInput.value.trim();
      if (!email || !password) {
        errorMsg.textContent = "Vui lòng nhập đầy đủ thông tin!";
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
        return;
      }
      if (activeTab === "signup" && password.length < 6) {
        errorMsg.textContent = "Mật khẩu đăng ký phải chứa ít nhất 6 ký tự!";
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Đang xử lý...";
      errorMsg.style.display = "none";
      successMsg.style.display = "none";

      // Timeout wrapper to prevent infinite hang
      const withTimeout = (promise, ms = 15000) => {
        return Promise.race([
          promise,
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Kết nối tới máy chủ quá lâu. Vui lòng kiểm tra kết nối mạng và thử lại.")), ms)
          )
        ]);
      };

      try {
        if (activeTab === "signin") {
          const { error } = await withTimeout(supabaseClientInstance.auth.signInWithPassword({ email, password }));
          if (error) throw error;
        } else {
          const fullName = document.getElementById("authFullName")?.value.trim() || "";
          const phone = document.getElementById("authPhone")?.value.trim() || "";
          const { error, data } = await withTimeout(supabaseClientInstance.auth.signUp({
            email,
            password,
            options: {
              data: { full_name: fullName, phone: phone }
            }
          }));
          if (error) throw error;
          // Supabase returns a fake user with identities=[] if email already exists
          if (data?.user && data.user.identities && data.user.identities.length === 0) {
            throw new Error("Email này đã được đăng ký. Vui lòng đăng nhập hoặc dùng email khác.");
          }
          
          if (data?.session) {
            successMsg.innerHTML = "<strong>Đăng ký thành công!</strong><br>Tài khoản của bạn đã được kích hoạt và đăng nhập tự động thành công.";
            successMsg.style.display = "block";
          } else {
            successMsg.innerHTML = "<strong>Đăng ký thành công!</strong><br>Vui lòng kiểm tra hộp thư email (và mục Spam) để xác nhận tài khoản.<br><br><span style='font-size: 10px; opacity: 0.8;'>Lưu ý: Do giới hạn của Supabase Free, email có thể mất 1-3 phút để tới.</span>";
            successMsg.style.display = "block";
          }
          
          // Clear inputs
          passInput.value = "";
        }
      } catch (err) {
        const msg = err.message || "Đã xảy ra lỗi không xác định.";
        errorMsg.textContent = msg;
        errorMsg.style.display = "block";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = activeTab === "signin" ? "Đăng nhập" : "Đăng ký tài khoản";
      }
    };
  }
}


// Cloud sync helper functions for User Progress (checklist & notes)
async function saveProgressToCloud(lessonId, completed, notes) {
  if (!isSupabaseConfigured || !currentSession) return null;
  try {
    const userId = currentSession.user.id;
    const { data, error } = await supabaseClientInstance
      .from("user_progress")
      .upsert({
        user_id: userId,
        lesson_id: String(lessonId),
        completed: completed,
        notes: notes,
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id,lesson_id" })
      .select();
    
    if (error) {
      console.warn("Failed to sync progress to cloud:", error.message || error);
      return null;
    }
    return data;
  } catch (err) {
    console.error("Error in saveProgressToCloud:", err);
    return null;
  }
}

async function loadAllProgressFromCloud() {
  if (!isSupabaseConfigured || !currentSession) return [];
  try {
    const { data, error } = await supabaseClientInstance
      .from("user_progress")
      .select("*")
      .eq("user_id", currentSession.user.id);
    
    if (error) {
      console.warn("Failed to load progress from cloud:", error.message || error);
      return [];
    }
    return data || [];
  } catch (err) {
    console.error("Error in loadAllProgressFromCloud:", err);
    return [];
  }
}


let currentProfileSubscription = null;

function subscribeToProfileChanges(callback) {
  if (!isSupabaseConfigured || !currentSession || !window.supabaseClientInstance) return;
  
  if (currentProfileSubscription) {
    window.supabaseClientInstance.removeChannel(currentProfileSubscription);
  }
  
  const userId = currentSession.user.id;
  console.log(`[Realtime] Subscribing to profile updates for user: ${userId}`);
  
  currentProfileSubscription = window.supabaseClientInstance
    .channel(`public-profiles-id-eq-${userId}`)
    .on(
      "postgres_changes",
      {
        event: "UPDATE",
        schema: "public",
        table: "profiles",
        filter: `id=eq.${userId}`
      },
      async (payload) => {
        console.log("[Realtime] Received profile update:", payload);
        if (payload.new) {
          currentUserProfile = payload.new;
          lastProfilePurchased = payload.new.purchased;
          lastProfileName = payload.new.full_name;
          
          triggerAuthChange();
          renderAuthUI();
          if (typeof window.updateAll === "function") window.updateAll();
          
          if (callback) {
            callback(payload.new);
          }
        }
      }
    )
    .subscribe((status) => {
      console.log(`[Realtime] Subscription status: ${status}`);
    });
}

// Expose key helper functions globally
window.checkPremiumStatus = checkPremiumStatus;
window.fetchPremiumLessonContent = fetchPremiumLessonContent;
window.updateLocalProfilePurchased = updateLocalProfilePurchased;
window.onAuthStateChange = onAuthStateChange;
window.getCurrentSession = () => currentSession;
window.getCurrentUserProfile = () => currentUserProfile;
window.saveProgressToCloud = saveProgressToCloud;
window.loadAllProgressFromCloud = loadAllProgressFromCloud;
window.subscribeToProfileChanges = subscribeToProfileChanges;



