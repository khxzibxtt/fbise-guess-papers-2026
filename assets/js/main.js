// PDF Viewer
function viewPDF(url, title) {
  document.getElementById('viewer').style.display = 'flex';
  document.getElementById('viewer-iframe').src = url;
  document.getElementById('viewer-title').textContent = title || url.split('/').pop().replace(/_/g,' ').replace('.pdf','');
  document.getElementById('viewer-dl').href = url;
  document.body.style.overflow = 'hidden';
}
function closeViewer() {
  document.getElementById('viewer').style.display = 'none';
  document.getElementById('viewer-iframe').src = '';
  document.body.style.overflow = '';
}
window.addEventListener('keydown', e => { if (e.key === 'Escape') closeViewer(); });

// Mobile nav
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});

// Subject filter
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const subject = this.dataset.filter;
    document.querySelectorAll('.card[data-subject]').forEach(card => {
      if (subject === 'all' || card.dataset.subject === subject) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Fade-up on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('fade-up'); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.card, .section-title').forEach(el => io.observe(el));
