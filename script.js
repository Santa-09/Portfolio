
// Cursor
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursorTrail');
let tx = 0, ty = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', e => {
    tx = e.clientX; ty = e.clientY;
    cursor.style.left = tx + 'px'; cursor.style.top = ty + 'px';
});
function animTrail() {
    cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
    trail.style.left = cx + 'px'; trail.style.top = cy + 'px';
    requestAnimationFrame(animTrail);
}
animTrail();

// Typing effect
const phrases = ['Cloud Engineer', 'Full-Stack Dev', 'DevOps Enthusiast', 'AWS Architect', 'Problem Solver'];
let pi = 0, ci = 0, del = false;
const typedEl = document.getElementById('typed');
function type() {
    const phrase = phrases[pi];
    if (!del) {
        typedEl.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) { del = true; setTimeout(type, 2000); return; }
    } else {
        typedEl.textContent = phrase.slice(0, --ci);
        if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, del ? 60 : 100);
}
type();

// 3D tilt on terminal
const term = document.getElementById('terminal3d');
if (term) {
    const wrap = term.parentElement;
    wrap.addEventListener('mousemove', e => {
        const r = wrap.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        term.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 10}deg)`;
        term.style.animation = 'none';
    });
    wrap.addEventListener('mouseleave', () => {
        term.style.transform = '';
        term.style.animation = '';
    });
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('shown'); } });
}, { threshold: 0.1 });
reveals.forEach(el => observer.observe(el));

// Skill bar animation
const skillObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const fill = e.target.querySelector('.skill-fill');
            if (fill) {
                const w = fill.getAttribute('data-w');
                fill.style.transform = `scaleX(${w / 100})`;
                fill.classList.add('animated');
            }
        }
    });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-card-3d').forEach(c => skillObs.observe(c));

// Back to top
const btt = document.getElementById('btt');
window.addEventListener('scroll', () => {
    btt.classList.toggle('visible', window.scrollY > 400);
});

// Active nav
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const pos = window.scrollY + 100;
    sections.forEach(s => {
        const top = s.offsetTop, h = s.offsetHeight;
        const link = document.querySelector(`.nav-links a[href="#${s.id}"]`);
        if (link) link.style.color = pos >= top && pos < top + h ? 'var(--cyan)' : '';
    });
});

// Form submit
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const btn = e.target.querySelector('.form-submit');
    btn.textContent = 'sending...';
    setTimeout(() => { btn.textContent = '✓ message_sent!'; }, 1500);
});
