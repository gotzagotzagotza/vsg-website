// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', expanded);
  });
}

// Active nav link
const currentPath = window.location.pathname;
document.querySelectorAll('.main-nav a').forEach(link => {
  const href = link.getAttribute('href');
  if (href && href !== '/' && currentPath.startsWith(href)) {
    link.classList.add('active');
  } else if (href === '/' && currentPath === '/') {
    link.classList.add('active');
  }
});
