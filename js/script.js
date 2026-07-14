document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Toggle icon between bars and times (close)
            const icon = mobileMenuBtn.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 2. Cookie Banner Logic (LGPD)
    const cookieBanner = document.getElementById('cookie-banner');
    const btnAccept = document.getElementById('btn-cookie-accept');
    const btnConfig = document.getElementById('btn-cookie-config');
    
    // Check if user already accepted cookies
    const cookieConsent = localStorage.getItem('realpetcenter_cookie_consent');
    
    if (!cookieConsent) {
        // Delay showing banner slightly for better UX
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1500);
    }
    
    if (btnAccept) {
        btnAccept.addEventListener('click', () => {
            localStorage.setItem('realpetcenter_cookie_consent', 'accepted');
            cookieBanner.classList.remove('show');
        });
    }
    
    if (btnConfig) {
        btnConfig.addEventListener('click', () => {
            // Usually this would open a modal to configure specific cookies
            // For now we'll just accept and close as this is a simple implementation
            alert('A configuração detalhada de cookies estará disponível em breve. Aceitando as configurações padrão por agora.');
            localStorage.setItem('realpetcenter_cookie_consent', 'accepted_default');
            cookieBanner.classList.remove('show');
        });
    }

    // 3. Header Scroll Effect
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            header.style.padding = '5px 0';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            header.style.padding = '10px 0';
        }
    });
});
