/* shared — fade-up scroll observer */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
