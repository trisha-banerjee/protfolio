const toggleBtn = document.querySelector('.navbar-toggle');
const navLinks = document.querySelector('.nav-links');
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  openIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    openIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
  });
});

const sections = document.querySelectorAll('.slides');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
