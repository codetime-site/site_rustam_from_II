/**
 * CNC Machining Services - Gallery Slider
 * Simple gallery slider with navigation
 */

class GallerySlider {
    constructor(selector) {
        this.gallery = document.querySelector(selector);
        if (!this.gallery) return;
        
        this.items = this.gallery.querySelectorAll('.gallery__item');
        this.prevBtn = this.gallery.querySelector('.gallery__slider-btn--prev');
        this.nextBtn = this.gallery.querySelector('.gallery__slider-btn--next');
        this.dotsContainer = this.gallery.querySelector('.gallery__slider-dots');
        
        this.currentIndex = 0;
        this.itemsPerView = this.getItemsPerView();
        
        this.init();
    }
    
    init() {
        if (this.items.length === 0) return;
        
        this.createDots();
        this.updateButtons();
        this.attachEvents();
        
        // Update items per view on resize
        window.addEventListener('resize', () => {
            this.itemsPerView = this.getItemsPerView();
            this.updateButtons();
        });
    }
    
    getItemsPerView() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 992) return 2;
        return 3;
    }
    
    createDots() {
        if (!this.dotsContainer) return;
        
        const totalDots = Math.ceil(this.items.length / this.itemsPerView);
        
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                this.goToSlide(i * this.itemsPerView);
            });
            
            this.dotsContainer.appendChild(dot);
        }
    }
    
    updateDots() {
        if (!this.dotsContainer) return;
        
        const dots = this.dotsContainer.querySelectorAll('.dot');
        const activeDotIndex = Math.floor(this.currentIndex / this.itemsPerView);
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }
    
    updateButtons() {
        if (!this.prevBtn || !this.nextBtn) return;
        
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.items.length - this.itemsPerView;
    }
    
    attachEvents() {
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.next());
        }
        
        // Touch events for mobile swipe
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.gallery.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.gallery.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        });
    }
    
    handleSwipe(startX, endX) {
        const diff = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.next();
            } else {
                this.prev();
            }
        }
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex -= this.itemsPerView;
            if (this.currentIndex < 0) this.currentIndex = 0;
            this.goToSlide(this.currentIndex);
        }
    }
    
    next() {
        if (this.currentIndex < this.items.length - this.itemsPerView) {
            this.currentIndex += this.itemsPerView;
            if (this.currentIndex > this.items.length - this.itemsPerView) {
                this.currentIndex = this.items.length - this.itemsPerView;
            }
            this.goToSlide(this.currentIndex);
        }
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        
        // Hide all items
        this.items.forEach(item => {
            item.style.display = 'none';
        });
        
        // Show current items
        for (let i = this.currentIndex; i < this.currentIndex + this.itemsPerView && i < this.items.length; i++) {
            this.items[i].style.display = 'block';
        }
        
        this.updateButtons();
        this.updateDots();
    }
}

// Initialize slider when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new GallerySlider('.gallery');
    });
} else {
    new GallerySlider('.gallery');
}