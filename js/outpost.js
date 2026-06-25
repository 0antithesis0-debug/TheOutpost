/* ============================================================
   IRON & EMBERS OUTPOST — JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Nav Toggle --- */
  const navToggle  = document.getElementById('navToggle');
  const navMobile  = document.getElementById('navMobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      navMobile.classList.toggle('open');
      const isOpen = navMobile.classList.contains('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close on mobile link click
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navMobile.classList.remove('open'));
    });
  }

  /* --- Nav scroll state --- */
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.style.borderBottomColor = 'rgba(61,53,48,0.9)';
    } else {
      nav.style.borderBottomColor = 'var(--iron)';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Email Signup Form --- */
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name  = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();

      if (!name || !email) return;

      // Replace form with confirmation message
      const confirm = document.createElement('div');
      confirm.style.cssText = `
        text-align: center;
        padding: 2rem;
        max-width: 480px;
        margin: 0 auto;
      `;
      confirm.innerHTML = `
        <p style="font-family: 'Barlow Condensed', sans-serif; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: #C85A1A; margin-bottom: 0.75rem;">You're In</p>
        <p style="font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: #F0E8DC; margin-bottom: 0.75rem;">Welcome to the early access list, ${name}.</p>
        <p style="font-size: 0.9rem; color: #C4B8A8;">We'll reach out to <strong style="color: #F0E8DC;">${email}</strong> when we have location news, opening week specials, and your early access offer.</p>
      `;
      form.replaceWith(confirm);
    });
  }

  /* --- Scroll-based section reveal (subtle) --- */
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll(
      '.concept, .menu-section, .story, .location, .updates'
    );

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07 });

    sections.forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(18px)';
      section.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
      revealObserver.observe(section);
    });
  }

});
