/* Narang Defence — site script */

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav__menu');
  const cta = document.querySelector('.nav__cta');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    if (cta) cta.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });
})();

// Scroll reveal (skipped if reduced motion preferred)
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const els = document.querySelectorAll('.reveal');
  if (!els.length || !('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();

// Set current year in footer
(function () {
  const yearEls = document.querySelectorAll('[data-year]');
  const year = new Date().getFullYear();
  yearEls.forEach(el => { el.textContent = year; });
})();
