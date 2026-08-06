function setLang(lang){
  document.querySelectorAll('[data-uk]').forEach(el => el.style.display = (lang === 'uk') ? '' : 'none');
  document.querySelectorAll('[data-en]').forEach(el => el.style.display = (lang === 'en') ? '' : 'none');
  document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('langToggle');
  if (toggle){
    toggle.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      setLang(btn.dataset.lang);
    });
  }
});
