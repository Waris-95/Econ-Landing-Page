// Parallax Effect with ScrollMagic
const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: '.presentation',
    triggerHook: 0.5,
    duration: '80%'
})
.setTween('.cover img', { y: '-50%' })
.addTo(controller);

// Dynamic Content Loading
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // AJAX call to load content dynamically
    });
});

const themeToggle = document.getElementById('theme-toggle'); // Assuming you have a toggle switch

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// saving user preference:
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// On page load, check the saved theme and apply it
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
});


