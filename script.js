document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll Reveal
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // Apply reveal to all cards and sections
    const elementsToReveal = document.querySelectorAll('.timeline-card, .project-item, h1, .hero-subtext');
    
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
});

// Add the CSS for reveal in your style.css or here
const style = document.createElement('style');
style.innerHTML = `
    .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .reveal-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
