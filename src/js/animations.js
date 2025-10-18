/**
 * CNC Machining Services - Animations
 * Handles scroll animations and interactive effects
 */

class AnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }
    
    init() {
        this.setupScrollAnimations();
        this.setupHeaderScroll();
        this.setupSmoothScroll();
    }
    
    /**
     * Setup Intersection Observer for scroll animations
     */
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.hero__content > *, .about__image, .about__text, ' +
            '.equipment__card, .gallery__item, ' +
            '.contacts__info, .contacts__form-wrapper, .footer__content'
        );
        
        if (!animatedElements.length) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    /**
     * Handle header scroll effect
     */
    setupHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        let lastScroll = 0;
        
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });
    }
    
    /**
     * Setup smooth scroll for anchor links
     */
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                if (href === '#' || href === '') return;
                
                const target = document.querySelector(href);
                if (!target) return;
                
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.querySelector('.header__nav');
                const burger = document.querySelector('.header__burger');
                if (nav && burger) {
                    nav.classList.remove('active');
                    burger.classList.remove('active');
                    burger.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
}

// Initialize animations when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AnimationController();
    });
} else {
    new AnimationController();
}