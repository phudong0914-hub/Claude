function renderAppLayout() {
  const sidebar = document.getElementById("layoutSidebar");
  if (sidebar) {
    sidebar.innerHTML = `
      <div class="brand">
        <span class="brand-mark brand-logo"><img src="assets/alpha-logo.jpg?v=20260528-1455" alt="Trungvt logo"></span>
        <div>
          <strong>Claude Mastery</strong>
          <span class="brand-author-gold">Trungvt</span>
        </div>
      </div>

      <label class="search-box">
        <span>Tìm</span>
        <input id="searchInput" type="search" placeholder="Prompt, Code, API...">
        <small id="searchStatus">Lọc bài học trong sơ đồ cây</small>
      </label>

      <div class="progress-card">
        <div>
          <span class="eyebrow">Tiến độ</span>
          <strong id="progressLabel">0/55</strong>
        </div>
        <div class="progress-track"><span id="progressBar"></span></div>
      </div>

      <nav id="moduleNav" class="module-nav"></nav>
    `;
  }

  const footer = document.getElementById("layoutFooter");
  if (footer) {
    footer.innerHTML = `
      <span>Claude Mastery</span>
      <span>55 bài học · NotebookLM pack · Trungvt</span>
    `;
  }
}

renderAppLayout();
