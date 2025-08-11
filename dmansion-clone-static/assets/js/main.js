// Mobile navigation toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.getAttribute('data-collapsible') !== null;
    if (open) {
      nav.removeAttribute('data-collapsible');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      nav.setAttribute('data-collapsible', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  // Close on outside click (mobile)
  document.addEventListener('click', (e) => {
    if (!nav.hasAttribute('data-collapsible')) return;
    if (!nav.contains(e.target) && e.target !== toggle) {
      nav.setAttribute('data-collapsible', '');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Year in footer
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();

// Filters on Listings
(function () {
  const chips = document.querySelectorAll('.chip');
  const cards = document.querySelectorAll('.card.property');
  if (!chips.length || !cards.length) return;

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        const show = filter === 'all' || filter === cat;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();

// Contact form (demo only)
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thank you, ${data.name || 'there'}! We will be in touch shortly.`);
    form.reset();
  });
})();