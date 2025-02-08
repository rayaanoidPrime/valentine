// Initialize Feather icons
document.addEventListener('DOMContentLoaded', () => {
    feather.replace();

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Message sent successfully!');
            form.reset();
        });
    }

    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'var(--bs-dark)';
        } else {
            navbar.style.backgroundColor = 'rgba(var(--bs-dark-rgb), 0.9)';
        }
    });
});
