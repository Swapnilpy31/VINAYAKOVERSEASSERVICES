/* ===================== script.js =====================
   VINAYAK OVERSEAS SERVICES
   Interactive Features & Animations v2.0
   ===================================================== */

'use strict';
document.addEventListener('DOMContentLoaded', () => {

  /* =====================================================
     1. NAVBAR — Sticky + Scroll Effect
     ===================================================== */
  const navbar    = document.getElementById('navbar');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar glass effect on scroll
    if (scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back-to-top visibility
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 400);
    }

    // Active nav link based on section in view
    updateActiveNavLink();
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* =====================================================
     2. HAMBURGER MENU
     ===================================================== */
  const hamburger = document.getElementById('hamburger');
  const navMenu   = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen.toString());
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* =====================================================
     3. ACTIVE NAV LINK — Intersection Observer
     ===================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveNavLink() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop    = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  /* =====================================================
     4. HERO DOTS / SLIDER (jQuery)
     ===================================================== */
  const $dots = $('.dot');
  const $slides = $('.hero-slide');
  let currentDot = 0;
  let dotInterval;

  function cycleDots(index) {
    if (index !== undefined) {
      currentDot = index;
    } else {
      currentDot = (currentDot + 1) % $slides.length;
    }
    
    $dots.removeClass('active');
    $dots.eq(currentDot).addClass('active');
    
    $slides.fadeOut(600);
    $slides.eq(currentDot).fadeIn(600);
  }

  if ($dots.length > 1 && $slides.length > 1) {
    $dots.on('click', function() {
      const idx = $(this).data('slide');
      clearInterval(dotInterval);
      cycleDots(idx);
      dotInterval = setInterval(cycleDots, 5000);
    });
    dotInterval = setInterval(cycleDots, 5000);
  }

  /* =====================================================
     5. SCROLL ANIMATIONS (Custom AOS-like)
     ===================================================== */
  const aosElements = document.querySelectorAll('[data-aos]');

  const aosObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, parseInt(delay));
        aosObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  aosElements.forEach(el => aosObserver.observe(el));

  /* =====================================================
     6. SERVICE CARDS — Staggered Animation
     ===================================================== */
  const svcCards = document.querySelectorAll('.service-card');
  const svcGrid  = document.querySelector('.services-grid');

  if (svcGrid && svcCards.length) {
    svcCards.forEach(card => {
      card.style.opacity    = '0';
      card.style.transform  = 'translateY(32px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.35s ease, border-color 0.35s ease';
    });

    const svcObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const cards = entry.target.querySelectorAll('.service-card');
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity   = '1';
              card.style.transform = 'translateY(0)';
            }, i * 100);
          });
          svcObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    svcObserver.observe(svcGrid);
  }

  /* =====================================================
     7. NUMBER COUNTER ANIMATION (Hero Stats)
     ===================================================== */
  function animateCounter(el, target) {
    let start    = 0;
    const duration = 1800;
    const step     = Math.ceil(target / (duration / 16));
    const supEl    = el.querySelector('sup');
    const suffix   = supEl ? supEl.textContent : '';
    if (supEl) supEl.remove();

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      el.textContent = start;
      if (start >= target) {
        const s = document.createElement('sup');
        s.textContent = suffix;
        el.appendChild(s);
      }
    }, 16);
  }

  // Hero stats counter
  const heroStats = document.querySelector('.hero-stats');
  let heroStatsAnimated = false;

  if (heroStats) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !heroStatsAnimated) {
        heroStatsAnimated = true;
        const statNums  = heroStats.querySelectorAll('.h-stat-num');
        const targets   = [500, 10, 50];
        statNums.forEach((el, i) => {
          if (targets[i] !== undefined) animateCounter(el, targets[i]);
        });
        statsObserver.unobserve(heroStats);
      }
    }, { threshold: 0.5 });
    statsObserver.observe(heroStats);
  }

  /* =====================================================
     8. FAQ ACCORDION
     ===================================================== */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      faqItems.forEach(fi => {
        fi.classList.remove('active');
        const q = fi.querySelector('.faq-question');
        if (q) {
          q.setAttribute('aria-expanded', 'false');
          const icon = q.querySelector('i');
          if (icon) {
            icon.className = 'fas fa-chevron-down';
          }
        }
      });

      // Open clicked if it was closed
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
        const icon = btn.querySelector('i');
        if (icon) {
          icon.className = 'fas fa-chevron-up';
        }
      }
    });
  });

  /* =====================================================
     9. CONTACT FORM — Validation & Submit
     ===================================================== */
  const contactForm = document.getElementById('contact-form');
  const toast       = document.getElementById('toast');

  function showToast(message, type = 'success') {
    if (!toast) return;
    toast.querySelector('span').textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setFieldError(fieldId, show) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    if (show) {
      field.style.borderColor = 'var(--danger)';
      field.style.boxShadow   = '0 0 0 3px rgba(229,62,62,.12)';
    } else {
      field.style.borderColor = '';
      field.style.boxShadow   = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name    = document.getElementById('contact-name').value.trim();
      const email   = document.getElementById('contact-email').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      let valid = true;

      if (!name) {
        setFieldError('contact-name', true);  valid = false;
      } else { setFieldError('contact-name', false); }

      if (!email || !validateEmail(email)) {
        setFieldError('contact-email', true); valid = false;
      } else { setFieldError('contact-email', false); }

      if (!message) {
        setFieldError('contact-message', true); valid = false;
      } else { setFieldError('contact-message', false); }

      if (!valid) {
        showToast('Please fill in all required fields correctly.', 'error');
        return;
      }

      // Simulate send
      const btn = contactForm.querySelector('.btn-send');
      const originalContent = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
      btn.disabled  = true;

      setTimeout(() => {
        btn.innerHTML = originalContent;
        btn.disabled  = false;
        contactForm.reset();
        showToast('Message sent successfully! We\'ll get back to you soon.');
      }, 1800);
    });

    // Clear error on input
    ['contact-name', 'contact-email', 'contact-message'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', () => setFieldError(id, false));
    });
  }

  /* =====================================================
     10. NEWSLETTER FORM
     ===================================================== */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('newsletter-email');
      if (emailInput && validateEmail(emailInput.value.trim())) {
        showToast('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
      } else {
        showToast('Please enter a valid email address.', 'error');
      }
    });
  }

  /* =====================================================
     11. BACK TO TOP
     ===================================================== */
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* =====================================================
     12. SMOOTH SCROLL for anchor links
     ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset    = navbar ? navbar.offsetHeight : 0;
        const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      }
    });
  });

  /* =====================================================
     13. WHY FEATURES — Hover Cycle
     ===================================================== */
  const whyFeatures = document.querySelectorAll('.why-feature');
  whyFeatures.forEach(feat => {
    feat.addEventListener('mouseenter', () => {
      whyFeatures.forEach(f => f.classList.remove('active'));
      feat.classList.add('active');
    });
  });

  /* =====================================================
     14. PRICING CARDS — stagger reveal
     ===================================================== */
  const pricingCards = document.querySelectorAll('.pricing-card');
  if (pricingCards.length) {
    pricingCards.forEach(card => {
      card.style.opacity    = '0';
      card.style.transform  = 'translateY(36px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease, box-shadow 0.35s ease';
    });

    const pricingGrid = document.querySelector('.pricing-grid');
    if (pricingGrid) {
      const pricingObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          pricingCards.forEach((card, i) => {
            setTimeout(() => {
              card.style.opacity   = '1';
              card.style.transform = card.classList.contains('featured') ? 'translateY(-8px)' : 'translateY(0)';
            }, i * 120);
          });
          pricingObs.unobserve(pricingGrid);
        }
      }, { threshold: 0.15 });
      pricingObs.observe(pricingGrid);
    }
  }

  /* =====================================================
     15. HOW IT WORKS STEPS — stagger reveal
     ===================================================== */
  const hiwSteps = document.querySelectorAll('.hiw-step');
  if (hiwSteps.length) {
    hiwSteps.forEach(step => {
      step.style.opacity    = '0';
      step.style.transform  = 'translateX(20px)';
      step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const hiwCol = document.querySelector('.hiw-steps-col');
    if (hiwCol) {
      const hiwObs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          hiwSteps.forEach((step, i) => {
            setTimeout(() => {
              step.style.opacity   = '1';
              step.style.transform = 'translateX(0)';
            }, i * 150);
          });
          hiwObs.unobserve(hiwCol);
        }
      }, { threshold: 0.2 });
      hiwObs.observe(hiwCol);
    }
  }

  /* =====================================================
     16. INIT
     ===================================================== */
  handleScroll(); // Run once on page load
  updateActiveNavLink();
});
