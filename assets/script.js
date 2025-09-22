// Carbon County Hackathon - Custom JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Navbar scroll effect
    const navbar = document.getElementById('mainNav');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Display hero stats immediately (no animation)
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        const counters = document.querySelectorAll('.stat-item h3');
        counters.forEach(counter => {
            const text = counter.textContent;
            if (text.includes('48')) {
                counter.textContent = '48';
            } else if (text.includes('10K')) {
                counter.textContent = '$10K';
            } else if (text.includes('200+')) {
                counter.textContent = '200+';
            }
        });
    }
    
    // Remove parallax effect for better readability
    
    // Simple hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.12)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Mobile menu close on link click
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        });
    });
    
    // Remove loading animation from buttons for better responsiveness
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.input-group');
    if (newsletterForm) {
        const subscribeBtn = newsletterForm.querySelector('button');
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        
        subscribeBtn.addEventListener('click', function() {
            const email = emailInput.value;
            if (email && isValidEmail(email)) {
                // Simulate subscription
                this.innerHTML = '<i class="bi bi-check-circle me-2"></i>Subscribed!';
                this.classList.remove('btn-primary');
                this.classList.add('btn-success');
                emailInput.value = '';
                
                setTimeout(() => {
                    this.innerHTML = 'Subscribe';
                    this.classList.remove('btn-success');
                    this.classList.add('btn-primary');
                }, 3000);
            } else {
                emailInput.classList.add('is-invalid');
                setTimeout(() => {
                    emailInput.classList.remove('is-invalid');
                }, 3000);
            }
        });
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Simple scroll progress indicator
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #0d6efd, #0dcaf0);
            z-index: 9999;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }
    
    createScrollProgress();
    
    // Remove particle effects for better readability
    
    // Console welcome message
    console.log(`
    🚀 Welcome to Carbon County Hackers 2025!
    
    Built with:
    • Bootstrap 5.3.3
    • Modern CSS3
    • Vanilla JavaScript
    • Love for coding! 💻
    
    Ready to hack? Let's build something amazing! 🎉
    `);
    
});