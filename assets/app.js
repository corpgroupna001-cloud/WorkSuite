(function () {
  /* ── Theme ── */
  const THEME_KEY = 'ws-theme';
  const prefersDark = () => matchMedia('(prefers-color-scheme:dark)').matches;

  function applyTheme(t) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem(THEME_KEY, t);
    document.querySelectorAll('[data-theme-toggle]').forEach(b =>
      b.textContent = t === 'dark' ? '☀️' : '🌙'
    );
  }

  /* ── Toast ── */
  function toast(msg, ms) {
    ms = ms || 2200;
    let el = document.getElementById('ws-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'ws-toast';
      el.className = 'toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove('show'), ms);
  }

  /* ── Copy ── */
  function copyText(text) {
    navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard'));
  }

  /* ── Recent Tools ── */
  function trackTool(name) {
    const key = 'ws-recent';
    let recent = JSON.parse(localStorage.getItem(key) || '[]');
    recent = recent.filter(r => r !== name);
    recent.unshift(name);
    localStorage.setItem(key, JSON.stringify(recent.slice(0, 8)));
  }

  /* ── Command Palette ── */
  const TOOLS = [
    { name: 'FocusFlow', icon: '⏱️', href: 'FocusFlow/', desc: 'Pomodoro timer' },
    { name: 'ZenType', icon: '⌨️', href: 'typingtest/', desc: 'Typing test' },
    { name: 'Signature Studio', icon: '✍️', href: 'signature/', desc: 'Email signatures' },
    { name: 'QR Studio', icon: '▦', href: 'QRStudio/', desc: 'QR code generator' },
    { name: 'WordCount Pro', icon: '¶', href: 'WordCountPro/', desc: 'Text analysis' },
    { name: 'Sports Taxonomy', icon: '🏆', href: 'Sportstaxonomy/', desc: 'Sports explorer' },
    { name: 'Password Generator', icon: '🔐', href: 'PasswordGen/', desc: 'Secure passwords' },
    { name: 'JSON Formatter', icon: '{ }', href: 'JsonFormat/', desc: 'JSON tools' },
    { name: 'Color Palette', icon: '🎨', href: 'ColorPalette/', desc: 'Color tools' },
    { name: 'Markdown Editor', icon: '📝', href: 'MarkdownPad/', desc: 'Markdown editor' },
    { name: 'Unit Converter', icon: '📐', href: 'UnitConvert/', desc: 'Unit converter' },
    { name: 'Quick Notes', icon: '📋', href: 'NotePad/', desc: 'Notepad' },
    { name: 'Home', icon: '◆', href: './', desc: 'Dashboard' },
  ];

  function initCommandPalette() {
    // don't init on tool subpages that don't have the overlay already
    const overlay = document.createElement('div');
    overlay.className = 'cmd-overlay';
    overlay.id = 'cmdPalette';
    overlay.innerHTML = `
      <div class="cmd-box">
        <input class="cmd-input" placeholder="Search tools… (Ctrl+K)" autocomplete="off" spellcheck="false">
        <div class="cmd-list"></div>
      </div>`;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('.cmd-input');
    const list = overlay.querySelector('.cmd-list');
    let activeIdx = 0;

    // Detect path depth for href prefix
    const depth = (location.pathname.match(/\//g) || []).length;
    const isSubPage = depth > 1 || (location.pathname.split('/').filter(Boolean).length > 0 && !location.pathname.endsWith('/') && location.pathname !== '/');
    const prefix = (location.pathname.includes('/index.html') || location.pathname.split('/').filter(Boolean).length >= 1) ? '../' : '';
    // Simpler: check if we're at root
    const atRoot = location.pathname === '/' || location.pathname.endsWith('/index.html') && location.pathname.split('/').filter(Boolean).length <= 1;

    function getPrefix() {
      if (atRoot) return '';
      // We're in a subfolder
      return '../';
    }

    function render(query) {
      const q = (query || '').toLowerCase();
      const filtered = TOOLS.filter(t =>
        t.name.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
      );
      activeIdx = 0;
      list.innerHTML = filtered.map((t, i) =>
        `<div class="cmd-item${i === 0 ? ' active' : ''}" data-href="${getPrefix()}${t.href}">
          <span class="cmd-icon">${t.icon}</span>
          <span>${t.name}<br><small style="color:var(--text-tertiary);font-weight:400">${t.desc}</small></span>
        </div>`
      ).join('') || '<div class="cmd-item" style="color:var(--text-tertiary)">No tools found</div>';
    }

    function open() { overlay.classList.add('open'); input.value = ''; render(''); input.focus(); }
    function close() { overlay.classList.remove('open'); }

    overlay.addEventListener('click', e => {
      if (e.target === overlay) close();
      const item = e.target.closest('.cmd-item');
      if (item && item.dataset.href) { close(); location.href = item.dataset.href; }
    });

    input.addEventListener('input', () => render(input.value));
    input.addEventListener('keydown', e => {
      const items = list.querySelectorAll('.cmd-item[data-href]');
      if (e.key === 'Escape') { close(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, items.length - 1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); }
      if (e.key === 'Enter' && items[activeIdx]) { close(); location.href = items[activeIdx].dataset.href; return; }
      items.forEach((it, i) => it.classList.toggle('active', i === activeIdx));
    });

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); open(); }
    });

    // Also expose for button clicks
    window._openCmd = open;
  }

  /* ── Export ── */
  window.WorkSuite = {
    applyTheme,
    toggleTheme() {
      applyTheme((document.documentElement.dataset.theme || 'light') === 'dark' ? 'light' : 'dark');
    },
    toast,
    copyText,
    trackTool
  };

  applyTheme(localStorage.getItem(THEME_KEY) || (prefersDark() ? 'dark' : 'light'));

  document.addEventListener('click', e => {
    if (e.target.closest('[data-theme-toggle]')) WorkSuite.toggleTheme();
  });

  document.addEventListener('DOMContentLoaded', initCommandPalette);
})();
