// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile menu after a link is clicked
  nav.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Obfuscated email
document.querySelectorAll('.email-link').forEach((link) => {
  const user = link.getAttribute('data-user');
  const domain = link.getAttribute('data-domain');
  if (user && domain) {
    const address = `${user}@${domain}`;
    link.setAttribute('href', `mailto:${address}`);
    link.textContent = address;
  }
});

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}