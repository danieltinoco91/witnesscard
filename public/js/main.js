/**
 * WitnessCard - Interactive Scripts
 * Handles phone preview simulator tabs, theme switches, FAQ accordions, and mobile navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Phone Simulator Tab Switcher
  const tabButtons = document.querySelectorAll('.tab-btn');
  const screenPanels = document.querySelectorAll('.screen-panel');

  if (tabButtons.length > 0) {
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        tabButtons.forEach(b => b.classList.remove('active'));
        screenPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const activePanel = document.getElementById(`panel-${targetTab}`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });
  }

  // 2. Digital Card Theme Selector in Mockup
  const themeDots = document.querySelectorAll('.theme-dot');
  const digitalCardPreview = document.getElementById('digitalCardPreview');

  if (themeDots.length > 0 && digitalCardPreview) {
    themeDots.forEach(dot => {
      dot.addEventListener('click', () => {
        const selectedTheme = dot.getAttribute('data-theme');
        
        // Remove existing theme classes
        digitalCardPreview.classList.remove('theme-light', 'theme-cyan', 'theme-blue');

        if (selectedTheme !== 'navy') {
          digitalCardPreview.classList.add(`theme-${selectedTheme}`);
        }

        themeDots.forEach(d => d.style.outline = 'none');
        dot.style.outline = '2px solid #1E68F6';
      });
    });
  }

  // 3. FAQ Accordion
  const faqCards = document.querySelectorAll('.faq-card');
  faqCards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = card.classList.contains('open');
        
        // Close others for clean accordion experience
        faqCards.forEach(c => c.classList.remove('open'));

        if (!isOpen) {
          card.classList.add('open');
        }
      });
    }
  });

  // 4. Mobile Menu Toggle & Drawer
  const mobileToggle = document.getElementById('mobileToggle') || document.querySelector('.mobile-toggle');
  const navMenu = document.getElementById('navMenu') || document.querySelector('.nav-menu');
  const navBackdrop = document.getElementById('navBackdrop') || document.querySelector('.nav-backdrop');

  function openMobileMenu() {
    if (!navMenu) return;
    navMenu.classList.add('mobile-open');
    if (mobileToggle) {
      mobileToggle.classList.add('is-active');
      mobileToggle.setAttribute('aria-expanded', 'true');
    }
    if (navBackdrop) {
      navBackdrop.classList.add('active');
    }
    document.body.classList.add('menu-locked');
  }

  function closeMobileMenu() {
    if (!navMenu) return;
    navMenu.classList.remove('mobile-open');
    if (mobileToggle) {
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    if (navBackdrop) {
      navBackdrop.classList.remove('active');
    }
    document.body.classList.remove('menu-locked');
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('mobile-open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });

    // Close if window resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('mobile-open')) {
        closeMobileMenu();
      }
    });
  }

  // 5. Sticky Privacy TOC Highlighting (for Privacy Page: Desktop Sidebar & Mobile Pill Bar)
  let legalObserver = null;
  function initPrivacyTocObserver() {
    if (legalObserver) {
      legalObserver.disconnect();
      legalObserver = null;
    }
    const legalSections = document.querySelectorAll('.legal-section-block');
    const legalNavItems = document.querySelectorAll('.legal-nav-item');
    const legalTocPills = document.querySelectorAll('.toc-pill');

    if (legalSections.length > 0 && (legalNavItems.length > 0 || legalTocPills.length > 0)) {
      legalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            
            // Desktop sidebar items
            legalNavItems.forEach(item => {
              const link = item.querySelector('a');
              if (link && link.getAttribute('href') === `#${id}`) {
                legalNavItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
              }
            });

            // Mobile horizontal pills
            legalTocPills.forEach(pill => {
              if (pill.getAttribute('href') === `#${id}`) {
                legalTocPills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                // Scroll the pill container horizontally without affecting the page scroll
                const scrollContainer = pill.closest('.legal-mobile-toc-scroll');
                if (scrollContainer) {
                  const targetLeft = pill.offsetLeft - (scrollContainer.clientWidth / 2) + (pill.clientWidth / 2);
                  scrollContainer.scrollTo({ left: targetLeft, behavior: 'smooth' });
                }
              }
            });
          }
        });
      }, {
        rootMargin: '-15% 0px -65% 0px'
      });

      legalSections.forEach(section => {
        if (section.offsetParent !== null) {
          legalObserver.observe(section);
        }
      });
    }
  }

  window.reinitPrivacyTocObserver = initPrivacyTocObserver;
  initPrivacyTocObserver();
});


// Utility to copy support email with notification
function copySupportEmail(email = 'support@witnesscard.app') {
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.createElement('div');
    toast.textContent = `Email copied to clipboard: ${email}`;
    toast.style.position = 'fixed';
    toast.style.bottom = '24px';
    toast.style.right = '24px';
    toast.style.backgroundColor = '#0B132B';
    toast.style.color = '#FFFFFF';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
    toast.style.zIndex = '9999';
    toast.style.fontSize = '0.9rem';
    toast.style.fontWeight = '600';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  });
}
