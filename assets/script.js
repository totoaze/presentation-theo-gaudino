// ==========================================
// SCRIPT PROFESSIONNEL - CV THEO GAUDINO
// ==========================================

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initNavigation();
  initIntersectionObserver();
  initFormValidation();
  trackPageViews();
  updateCopyright();
});

// ==========================================
// 1. ANIMATIONS AU SCROLL
// ==========================================

function initScrollAnimations() {
  const elements = document.querySelectorAll('.card, .skill-item, .timeline-item, .contact-card');
  
  elements.forEach((element, index) => {
    element.classList.add('scroll-reveal');
    element.style.animationDelay = `${index * 0.1}s`;
  });
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

function initIntersectionObserver() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// 2. NAVIGATION PROFESSIONNELLE
// ==========================================

function initNavigation() {
  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Active link highlighting
  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav);
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}

// ==========================================
// 3. VALIDATION FORMULAIRE
// ==========================================

function initFormValidation() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      name: document.getElementById('name')?.value,
      email: document.getElementById('email')?.value,
      subject: document.getElementById('subject')?.value,
      message: document.getElementById('message')?.value
    };

    // Validation basique
    if (validateForm(formData)) {
      sendForm(formData);
    }
  });
}

function validateForm(data) {
  if (!data.name || data.name.trim().length < 2) {
    showAlert('Le nom doit contenir au moins 2 caractères', 'error');
    return false;
  }
  
  if (!isValidEmail(data.email)) {
    showAlert('Veuillez entrer une adresse email valide', 'error');
    return false;
  }
  
  if (!data.subject || data.subject.trim().length < 3) {
    showAlert('Le sujet doit contenir au moins 3 caractères', 'error');
    return false;
  }
  
  if (!data.message || data.message.trim().length < 10) {
    showAlert('Le message doit contenir au moins 10 caractères', 'error');
    return false;
  }
  
  return true;
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function sendForm(data) {
  const mailtoLink = `mailto:theo.gaudino@perrimond.eu?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
  
  window.location.href = mailtoLink;
  
  // Reset form
  document.getElementById('contactForm').reset();
  showAlert('Votre message a été envoyé avec succès!', 'success');
}

// ==========================================
// 4. STATISTIQUES & ANALYTICS
// ==========================================

function trackPageViews() {
  const pageData = {
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
    referrer: document.referrer
  };
  
  // Sauvegarder dans sessionStorage
  sessionStorage.setItem('lastPageView', JSON.stringify(pageData));
  
  // Log pour développement
  console.log('Page visitée:', pageData);
}

// ==========================================
// 5. UTILITIES
// ==========================================

function showAlert(message, type = 'info') {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type}`;
  alertDiv.textContent = message;
  alertDiv.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === 'error' ? '#ff6b6b' : '#4caf50'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(alertDiv);
  
  setTimeout(() => {
    alertDiv.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => alertDiv.remove(), 300);
  }, 3000);
}

function updateCopyright() {
  const year = new Date().getFullYear();
  const footers = document.querySelectorAll('footer p:first-child');
  footers.forEach(footer => {
    footer.textContent = `© ${year} Théo Gaudino. Tous droits réservés.`;
  });
}

// ==========================================
// 6. EFFETS INTERACTIFS
// ==========================================

// Parallax au scroll
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const heroImage = document.querySelector('.hero-image');
  
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  }
});

// Hover effects sur les cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// ==========================================
// 7. ANIMATIONS CSS ADDITIONNELLES
// ==========================================

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  nav a.active {
    color: #e94560;
    font-weight: 600;
  }
  
  .scroll-reveal {
    opacity: 0;
    transform: translateY(30px);
  }
`;
document.head.appendChild(style);

