// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');

const setActiveLink = () => {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', setActiveLink);

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = entry.target.dataset.animation || 'fadeInUp 0.6s ease forwards';
            animateOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animations to elements
document.querySelectorAll('.project-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.dataset.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    animateOnScroll.observe(el);
});

document.querySelectorAll('.skill-category').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.dataset.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
    animateOnScroll.observe(el);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Create mailto link as a fallback
    const subject = encodeURIComponent('Portfolio Contact Form Submission');
    const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
    `);
    
    window.location.href = `mailto:tobyliu2004@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Opening Email Client...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        contactForm.reset();
    }, 3000);
});

// Typing Effect for Home Title
const homeTitle = document.querySelector('.home-title');
const originalText = homeTitle.textContent;
homeTitle.textContent = '';
let charIndex = 0;

const typeText = () => {
    if (charIndex < originalText.length) {
        homeTitle.textContent += originalText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    }
};

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeText, 500);
});

// Parallax Effect for Home Section
const homeSection = document.querySelector('.home-section');
const profileImage = document.querySelector('.profile-image-container');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (scrolled < window.innerHeight) {
        homeSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        profileImage.style.transform = `translateY(${scrolled * -0.2}px)`;
    }
});

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Add gradient hover effect styles
const gradientStyle = document.createElement('style');
gradientStyle.textContent = `
    .project-card {
        position: relative;
        overflow: hidden;
    }
    
    .project-card::before {
        content: '';
        position: absolute;
        top: var(--mouse-y, 50%);
        left: var(--mouse-x, 50%);
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
        transition: width 0.6s, height 0.6s;
        pointer-events: none;
    }
    
    .project-card:hover::before {
        width: 300px;
        height: 300px;
    }
`;
document.head.appendChild(gradientStyle);

// Performance optimization - Debounce scroll events
let scrollTimeout;
const debounceScroll = (func, wait) => {
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(scrollTimeout);
            func(...args);
        };
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(later, wait);
    };
};

// Apply debounced scroll handlers
window.addEventListener('scroll', debounceScroll(setActiveLink, 10));

// Preload images
const preloadImages = () => {
    const imageUrls = [
        'https://github.com/tobyliu2004.png'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

window.addEventListener('load', preloadImages);

// Console Easter Egg
console.log('%c👋 Hi there!', 'font-size: 24px; font-weight: bold; color: #2563eb;');
console.log('%cThanks for checking out my portfolio!', 'font-size: 16px; color: #6b7280;');
console.log('%cFeel free to reach out at tobyliu2004@gmail.com', 'font-size: 14px; color: #6b7280;');