document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
  });

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      scrollTopBtn.style.display = 'block';
    } else {
      scrollTopBtn.style.display = 'none';
    }
  });
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Contact form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('Name').value.trim();
      const email = document.getElementById('E-mail').value.trim();
      const message = document.getElementById('Message').value.trim();
      const formMessage = document.getElementById('formMessage');
      if (name && email && message) {
        formMessage.innerText = 'Thank you for contacting me!';
        contactForm.reset();
      } else {
        formMessage.innerText = 'Please fill in all fields.';
      }
    });
  }
});
