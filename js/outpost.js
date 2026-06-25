/* ============================================================
   IRON & EMBERS OUTPOST — JavaScript v2
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Mobile Nav Toggle --- */
  const navToggle = document.getElementById('navToggle');
  const navMobile = document.getElementById('navMobile');
  const nav       = document.getElementById('nav');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.querySelectorAll('span').forEach((s, i) => {
        s.style.transform = isOpen
          ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 1 ? 'opacity:0' : 'rotate(-45deg) translate(5px,-5px)')
          : '';
        s.style.opacity = (isOpen && i === 1) ? '0' : '1';
      });
    });

    // Close on any mobile link tap
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        navToggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '1';
        });
      });
    });

    // Close on outside tap
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* --- Nav scroll elevation --- */
  const onScroll = () => {
    nav.style.borderBottomColor = window.scrollY > 60
      ? 'rgba(61,53,48,0.9)'
      : 'var(--iron)';
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* --- Active nav link highlight on scroll --- */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');

  const highlightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('nav-active', href === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => highlightObserver.observe(s));

  /* --- Scroll-triggered section reveals --- */
  if ('IntersectionObserver' in window) {
    const revealTargets = document.querySelectorAll(
      '.concept, .market, .story, .menu-section, .financials, .seasonal, .why, .timeline-section, .risk, .contact, .snapshot-strip, .why-card, .scenario-card, .timeline-item'
    );

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06 });

    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      revealObserver.observe(el);
    });
  }

  /* --- Email / Inquiry Form --- */
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name  = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const role  = form.querySelector('[name="role"]') ? form.querySelector('[name="role"]').value.trim() : '';
      if (!name || !email) return;

      const confirm = document.createElement('div');
      confirm.style.cssText = 'text-align:center;padding:2rem;max-width:480px;margin:0 auto;';
      confirm.innerHTML = `
        <p style="font-family:'Barlow Condensed',sans-serif;font-size:0.72rem;font-weight:700;letter-spacing:0.2em;text-transform:uppercase;color:#C85A1A;margin-bottom:0.75rem;">Inquiry Received</p>
        <p style="font-family:'Playfair Display',serif;font-size:1.4rem;font-weight:700;color:#F0E8DC;margin-bottom:0.75rem;">Thank you, ${name}.</p>
        <p style="font-size:0.9rem;color:#C4B8A8;line-height:1.65;">We'll follow up at <strong style="color:#F0E8DC;">${email}</strong>${role ? ` regarding your interest as ${role}` : ''}.</p>
      `;
      form.replaceWith(confirm);
    });
  }

  /* --- Prevent zoom on input focus (iOS) --- */
  // iOS zooms in when input font-size < 16px. We handle this in CSS.

});
