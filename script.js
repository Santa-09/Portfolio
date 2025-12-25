
// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Typing animation
const greetingEl = document.getElementById('greeting');
const typingEl = document.getElementById('typingText');

const greetings = ['Hi', 'Hello', 'Hey'];
const names = ['Santanu', 'a Cloud Architect'];

let greetingIndex = 0;
let nameIndex = 0;
let charIndex = 0;
let isDeleting = false;
let isGreetingPhase = true;

function type() {
    if (isGreetingPhase) {
        const currentGreeting = greetings[greetingIndex];

        if (!isDeleting && charIndex <= currentGreeting.length) {
            greetingEl.textContent = currentGreeting.substring(0, charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && charIndex >= 0) {
            greetingEl.textContent = currentGreeting.substring(0, charIndex);
            charIndex--;
            setTimeout(type, 100);
        } else if (!isDeleting && charIndex > currentGreeting.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 1000);
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            greetingIndex = (greetingIndex + 1) % greetings.length;

            if (greetingIndex === 0) {
                isGreetingPhase = false;
                charIndex = 0;
                greetingEl.textContent = greetings[0] + ',';
                setTimeout(type, 500);
            } else {
                setTimeout(type, 500);
            }
        }
    } else {
        const currentName = names[nameIndex];

        if (!isDeleting && charIndex <= currentName.length) {
            typingEl.textContent = currentName.substring(0, charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else if (isDeleting && charIndex >= 0) {
            typingEl.textContent = currentName.substring(0, charIndex);
            charIndex--;
            setTimeout(type, 100);
        } else if (!isDeleting && charIndex > currentName.length) {
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 2000);
        } else if (isDeleting && charIndex < 0) {
            isDeleting = false;
            nameIndex = (nameIndex + 1) % names.length;
            setTimeout(type, 500);
        }
    }
}

// Start typing animation
setTimeout(type, 500);

// Download CV functionality
document.getElementById('downloadCV').addEventListener('click', function (e) {
    e.preventDefault();
    alert('CV download started! In a real scenario, this would download your resume PDF.');
    // In production, you would link to your actual CV file
    // window.location.href = 'path/to/your/cv.pdf';
});

// Add scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});