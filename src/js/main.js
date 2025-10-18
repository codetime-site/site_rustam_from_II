/**
 * CNC Machining Services - Main JavaScript
 * Handles mobile menu, form submission, and general interactions
 */

class MainController {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupMobileMenu();
        this.setupFormHandler();
        this.setupModalButtons();
    }
    
    /**
     * Mobile menu toggle
     */
    setupMobileMenu() {
        const burger = document.querySelector('.header__burger');
        const nav = document.querySelector('.header__nav');
        
        if (!burger || !nav) return;
        
        burger.addEventListener('click', () => {
            const isExpanded = burger.getAttribute('aria-expanded') === 'true';
            
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            burger.setAttribute('aria-expanded', !isExpanded);
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = !isExpanded ? 'hidden' : '';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!burger.contains(e.target) && !nav.contains(e.target)) {
                burger.classList.remove('active');
                nav.classList.remove('active');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }
    
    /**
     * Form submission handler
     */
    setupFormHandler() {
        const form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const messageDiv = document.getElementById('formMessage');
            const submitBtn = form.querySelector('button[type="submit"]');
            
            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';
            
            try {
                // Simulate form submission (replace with actual endpoint)
                await this.submitForm(formData);
                
                // Show success message
                messageDiv.textContent = 'Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.';
                messageDiv.className = 'contacts__form-message success';
                
                // Reset form
                form.reset();
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    messageDiv.className = 'contacts__form-message';
                    messageDiv.textContent = '';
                }, 5000);
                
            } catch (error) {
                // Show error message
                messageDiv.textContent = 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже или свяжитесь с нами по телефону.';
                messageDiv.className = 'contacts__form-message error';
                
                console.error('Form submission error:', error);
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'Отправить заявку';
            }
        });
    }
    
    /**
     * Simulate form submission
     * Replace this with actual API call
     */
    async submitForm(formData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate successful submission
                // In production, replace with:
                // fetch('/api/contact', { method: 'POST', body: formData })
                resolve({ success: true });
            }, 1500);
        });
    }
    
    /**
     * Setup modal buttons (callback buttons)
     */
    setupModalButtons() {
        const modalButtons = document.querySelectorAll('[data-modal="callback"]');
        
        modalButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Scroll to contacts form
                const contactsSection = document.getElementById('contacts');
                if (contactsSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = contactsSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Focus on first form input
                    setTimeout(() => {
                        const firstInput = contactsSection.querySelector('input');
                        if (firstInput) firstInput.focus();
                    }, 500);
                }
            });
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new MainController();
    });
} else {
    new MainController();
}

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MainController;
}