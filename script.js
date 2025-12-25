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

// Enhanced Download CV functionality
document.getElementById('downloadCV').addEventListener('click', function (e) {
    e.preventDefault();
    
    // Create and show download modal
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>Download CV</h3>
            <p>Choose your preferred format:</p>
            <div class="download-options">
                <button class="download-btn pdf-btn" data-format="pdf">
                    <span class="format-icon">📄</span>
                    <span class="format-text">PDF Format</span>
                    <span class="format-size">(Recommended)</span>
                </button>
                <button class="download-btn doc-btn" data-format="doc">
                    <span class="format-icon">📝</span>
                    <span class="format-text">DOC Format</span>
                    <span class="format-size">(Editable)</span>
                </button>
            </div>
            <button class="modal-close">Cancel</button>
        </div>
    `;
    
    // Add styles for modal
    const style = document.createElement('style');
    style.textContent = `
        .download-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
        }
        
        .modal-content {
            background: #1a1a1a;
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(0, 191, 255, 0.3);
            max-width: 500px;
            width: 90%;
            text-align: center;
        }
        
        .modal-content h3 {
            color: #00bfff;
            margin-bottom: 10px;
            font-size: 24px;
        }
        
        .modal-content p {
            color: #aaa;
            margin-bottom: 30px;
        }
        
        .download-options {
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .download-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 191, 255, 0.2);
            border-radius: 12px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
        }
        
        .download-btn:hover {
            background: rgba(0, 191, 255, 0.1);
            border-color: #00bfff;
            transform: translateY(-3px);
        }
        
        .pdf-btn {
            background: rgba(255, 59, 48, 0.1);
            border-color: rgba(255, 59, 48, 0.3);
        }
        
        .pdf-btn:hover {
            background: rgba(255, 59, 48, 0.2);
            border-color: #ff3b30;
        }
        
        .format-icon {
            font-size: 24px;
        }
        
        .format-text {
            flex: 1;
            text-align: left;
            margin-left: 15px;
            font-weight: 600;
        }
        
        .format-size {
            color: #888;
            font-size: 12px;
        }
        
        .modal-close {
            padding: 12px 30px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 8px;
            color: #aaa;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
        }
        
        @media (max-width: 768px) {
            .download-options {
                flex-direction: column;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(modal);
    
    // Handle download format selection
    modal.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const format = this.dataset.format;
            simulateDownload(format);
            document.body.removeChild(modal);
            document.head.removeChild(style);
        });
    });
    
    // Close modal
    modal.querySelector('.modal-close').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(style);
    });
    
    // Close modal on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(style);
        }
    });
});

function simulateDownload(format) {
    // Simulate download progress
    const progress = document.createElement('div');
    progress.className = 'download-progress';
    progress.innerHTML = `
        <div class="progress-content">
            <h3>Downloading CV...</h3>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <p>Preparing ${format.toUpperCase()} file...</p>
        </div>
    `;
    
    // Add progress bar styles
    const progressStyle = document.createElement('style');
    progressStyle.textContent = `
        .download-progress {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
        }
        
        .progress-content {
            background: #1a1a1a;
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(0, 191, 255, 0.3);
            max-width: 400px;
            width: 90%;
            text-align: center;
        }
        
        .progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
            margin: 20px 0;
        }
        
        .progress-fill {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #00bfff, #1e90ff);
            border-radius: 4px;
            transition: width 0.3s;
        }
    `;
    
    document.head.appendChild(progressStyle);
    document.body.appendChild(progress);
    
    // Simulate download progress
    let width = 0;
    const interval = setInterval(() => {
        width += 10;
        progress.querySelector('.progress-fill').style.width = width + '%';
        
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.body.removeChild(progress);
                document.head.removeChild(progressStyle);
                
                // Show success message
                alert(`CV downloaded successfully in ${format.toUpperCase()} format!\n\nIn a production environment, this would:\n1. Generate a real ${format} file\n2. Include your updated information\n3. Provide actual download link\n4. Track download analytics`);
                
                // In production, you would use:
                // window.location.href = `path/to/your/cv.${format}`;
                // or create a blob download
            }, 500);
        }
    }, 100);
}

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset previous errors
        resetErrors();
        
        // Validate fields
        let isValid = true;
        
        if (!name) {
            showError('nameError', 'Name is required');
            isValid = false;
        } else if (name.length < 2) {
            showError('nameError', 'Name must be at least 2 characters');
            isValid = false;
        }
        
        if (!email) {
            showError('emailError', 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        if (!subject) {
            showError('subjectError', 'Subject is required');
            isValid = false;
        }
        
        if (!message) {
            showError('messageError', 'Message is required');
            isValid = false;
        } else if (message.length < 10) {
            showError('messageError', 'Message must be at least 10 characters');
            isValid = false;
        }
        
        if (isValid) {
            // Simulate form submission
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // In production, you would send this data to a server
            // Example: fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, subject, message }) })
            
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show success message
                document.getElementById('formSuccess').textContent = 'Message sent successfully! I\'ll get back to you soon.';
                document.getElementById('formSuccess').style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById('formSuccess').style.display = 'none';
                }, 5000);
            }, 2000);
        }
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function resetErrors() {
    document.querySelectorAll('.error-message').forEach(el => {
        el.style.display = 'none';
        el.textContent = '';
    });
    document.getElementById('formSuccess').style.display = 'none';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

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

// Profile image fallback
const profileImg = document.getElementById('profileImg');
if (profileImg) {
    profileImg.onerror = function() {
        this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect width="400" height="400" fill="%23000b19"/><text x="200" y="220" font-family="Arial" font-size="120" font-weight="bold" fill="%2300bfff" text-anchor="middle">S</text></svg>';
    };
}