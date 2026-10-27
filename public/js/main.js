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

  // 4. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // 5. Sticky Privacy TOC Highlighting (for Privacy Page)
  const legalSections = document.querySelectorAll('.legal-section-block');
  const legalNavItems = document.querySelectorAll('.legal-nav-item');

  if (legalSections.length > 0 && legalNavItems.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          legalNavItems.forEach(item => {
            const link = item.querySelector('a');
            if (link && link.getAttribute('href') === `#${id}`) {
              legalNavItems.forEach(i => i.classList.remove('active'));
              item.classList.add('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    legalSections.forEach(section => observer.observe(section));
  }
});

// Utility to copy support email with notification
function copySupportEmail(email = 'soporte@witnesscard.app') {
  navigator.clipboard.writeText(email).then(() => {
    const toast = document.createElement('div');
    toast.textContent = `Correo copiado al portapapeles: ${email}`;
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
