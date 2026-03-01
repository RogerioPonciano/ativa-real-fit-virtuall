// script.js

// Smooth Scroll Functionality
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

// Animation on Scroll Functionality
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    elements.forEach(el => observer.observe(el));
};

// WhatsApp Integration Functionality
const initiateWhatsAppChat = (phone, message) => {
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    document.querySelector('#whatsapp-button').addEventListener('click', () => {
        initiateWhatsAppChat('1234567890', 'Hello! I need assistance.');
    });
});
