(function () {
  const KEY = 'worksuite-theme';
  const prefersDark = () => matchMedia('(prefers-color-scheme: dark)').matches;

  function apply(t) {
    document.documentElement.dataset.theme = t;
    localStorage.setItem(KEY, t);
    document.querySelectorAll('[data-theme-toggle]').forEach(b =>
      b.textContent = t === 'dark' ? '☀️' : '🌙'
    );
  }

  window.WorkSuite = {
    applyTheme: apply,
    toggleTheme() {
      apply((document.documentElement.dataset.theme || 'light') === 'dark' ? 'light' : 'dark');
    },
    toast(msg, ms = 2200) {
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
    },
    copyText(text) {
      navigator.clipboard.writeText(text).then(() => WorkSuite.toast('Copied to clipboard'));
    }
  };

  apply(localStorage.getItem(KEY) || (prefersDark() ? 'dark' : 'light'));
  document.addEventListener('click', e => {
    if (e.target.closest('[data-theme-toggle]')) WorkSuite.toggleTheme();
  });
})();
