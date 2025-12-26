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
            <h3>📄 Download CV</h3>
            <p>Choose your preferred format:</p>
            <div class="download-options">
                <button class="download-btn pdf-btn" data-format="pdf">
                    <span class="format-icon">📄</span>
                    <span class="format-text">PDF Format</span>
                    <span class="format-size">(Recommended - Best Quality)</span>
                </button>
                <button class="download-btn doc-btn" data-format="doc">
                    <span class="format-icon">📝</span>
                    <span class="format-text">DOCX Format</span>
                    <span class="format-size">(Editable - MS Word)</span>
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
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .modal-content {
            background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(0, 191, 255, 0.3);
            max-width: 500px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 191, 255, 0.2);
            animation: slideUp 0.4s ease;
        }
        
        @keyframes slideUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-content h3 {
            color: #00bfff;
            margin-bottom: 15px;
            font-size: 28px;
            background: linear-gradient(135deg, #00bfff, #1e90ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .modal-content p {
            color: #aaa;
            margin-bottom: 30px;
            font-size: 16px;
            line-height: 1.6;
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
            padding: 20px 25px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(0, 191, 255, 0.2);
            border-radius: 12px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
            font-family: inherit;
        }
        
        .download-btn:hover {
            background: rgba(0, 191, 255, 0.1);
            border-color: #00bfff;
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 191, 255, 0.3);
        }
        
        .pdf-btn {
            background: linear-gradient(135deg, rgba(255, 59, 48, 0.1), rgba(220, 20, 60, 0.1));
            border-color: rgba(255, 59, 48, 0.3);
        }
        
        .pdf-btn:hover {
            background: linear-gradient(135deg, rgba(255, 59, 48, 0.2), rgba(220, 20, 60, 0.2));
            border-color: #ff3b30;
        }
        
        .format-icon {
            font-size: 28px;
        }
        
        .format-text {
            flex: 1;
            text-align: left;
            margin-left: 15px;
            font-weight: 600;
            font-size: 16px;
        }
        
        .format-size {
            color: #888;
            font-size: 13px;
            opacity: 0.8;
        }
        
        .modal-close {
            padding: 14px 35px;
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 10px;
            color: #aaa;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
            font-size: 14px;
            width: 100%;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .modal-close:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            border-color: rgba(255, 255, 255, 0.3);
        }
        
        @media (max-width: 768px) {
            .modal-content {
                padding: 30px 20px;
            }
            
            .download-options {
                gap: 12px;
            }
            
            .download-btn {
                padding: 18px 20px;
            }
            
            .format-text {
                font-size: 15px;
            }
            
            .format-size {
                font-size: 12px;
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
    
    // Close modal on Escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.head.removeChild(style);
            document.removeEventListener('keydown', closeOnEscape);
        }
    });
});

// ACTUAL CV DOWNLOAD FUNCTION - FIXED PATHS
function simulateDownload(format) {
    // CORRECTED CV file paths - files are in root directory
    const cvFiles = {
        'pdf': {
            path: 'https://drive.google.com/file/d/1cOKWNfeTJ0yvQ4vx9mpTt1zxgNORFOES/view?usp=sharing',// CORRECTED: File in root directory
            filename: 'Santanu-Resume.pdf'
        },
        'doc': {
            path: 'https://docs.google.com/document/d/1TIBQceHikKI-4D312j-QbIjbkfJcdXA0/edit?usp=sharing&ouid=113258384918181738704&rtpof=true&sd=true',         // CORRECTED: File in root directory
            filename: 'Santanu-Resume.docx'
        }
    };
    
    const fileConfig = cvFiles[format];
    
    if (!fileConfig) {
        alert('Invalid format selected');
        return;
    }
    
    // Show loading state
    const progress = document.createElement('div');
    progress.className = 'download-progress';
    progress.innerHTML = `
        <div class="progress-content">
            <div class="progress-icon">⏳</div>
            <h3>Preparing your CV...</h3>
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <p>Downloading ${format.toUpperCase()} file...</p>
            <div class="progress-details">
                <span class="file-name">${fileConfig.filename}</span>
                <span class="file-size">${format === 'pdf' ? '~2 MB' : '~3 MB'}</span>
            </div>
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
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease;
        }
        
        .progress-content {
            background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(0, 191, 255, 0.3);
            max-width: 450px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 191, 255, 0.2);
        }
        
        .progress-icon {
            font-size: 48px;
            margin-bottom: 20px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        .progress-content h3 {
            color: #00bfff;
            margin-bottom: 25px;
            font-size: 22px;
        }
        
        .progress-content p {
            color: #aaa;
            margin-top: 20px;
            font-size: 15px;
        }
        
        .progress-bar {
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 4px;
            overflow: hidden;
            margin: 0 auto;
        }
        
        .progress-fill {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, #00bfff, #1e90ff);
            border-radius: 4px;
            transition: width 0.3s ease;
        }
        
        .progress-details {
            display: flex;
            justify-content: space-between;
            margin-top: 25px;
            padding-top: 15px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .file-name {
            color: #ddd;
            font-size: 13px;
            font-weight: 500;
        }
        
        .file-size {
            color: #888;
            font-size: 12px;
        }
        
        @media (max-width: 768px) {
            .progress-content {
                padding: 30px 20px;
            }
            
            .progress-icon {
                font-size: 40px;
            }
            
            .progress-content h3 {
                font-size: 20px;
            }
        }
    `;
    
    document.head.appendChild(progressStyle);
    document.body.appendChild(progress);
    
    // Simulate download progress
    let width = 0;
    const interval = setInterval(() => {
        width += Math.random() * 15 + 5; // Random progress increments
        if (width > 100) width = 100;
        progress.querySelector('.progress-fill').style.width = width + '%';
        
        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                document.body.removeChild(progress);
                document.head.removeChild(progressStyle);
                
                // TRIGGER ACTUAL FILE DOWNLOAD
                triggerActualDownload(fileConfig);
                
            }, 300);
        }
    }, 150);
}

// Function to trigger actual file download
function triggerActualDownload(fileConfig) {
    try {
        // Method 1: Create a temporary link for download
        const link = document.createElement('a');
        link.href = fileConfig.path;
        link.download = fileConfig.filename; // This forces download with custom filename
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show success message
        setTimeout(() => {
            showDownloadSuccess(fileConfig.filename);
        }, 500);
        
    } catch (error) {
        console.error('Download error:', error);
        
        // Fallback: Redirect to file if link method fails
        setTimeout(() => {
            window.location.href = fileConfig.path;
        }, 1000);
        
        // Show fallback message
        setTimeout(() => {
            showDownloadSuccess(fileConfig.filename, true);
        }, 1500);
    }
}

// Show download success message
function showDownloadSuccess(filename, isFallback = false) {
    const successMsg = document.createElement('div');
    successMsg.className = 'download-success';
    successMsg.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✅</div>
            <h3>Download Complete!</h3>
            <p>Your CV has been downloaded successfully.</p>
            <div class="success-details">
                <strong>File:</strong> ${filename}<br>
                <strong>Saved to:</strong> Downloads folder
            </div>
            <p class="success-note">${isFallback ? 'Opened in new tab. Please use "Save As" to download.' : 'Check your downloads folder for the file.'}</p>
            <button class="success-close">Close</button>
        </div>
    `;
    
    // Add success message styles
    const successStyle = document.createElement('style');
    successStyle.textContent = `
        .download-success {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10002;
            backdrop-filter: blur(10px);
            animation: fadeIn 0.3s ease;
        }
        
        .success-content {
            background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
            padding: 40px;
            border-radius: 20px;
            border: 1px solid rgba(0, 191, 255, 0.3);
            max-width: 450px;
            width: 90%;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0, 191, 255, 0.2);
        }
        
        .success-icon {
            font-size: 48px;
            margin-bottom: 20px;
            animation: scaleIn 0.5s ease;
        }
        
        @keyframes scaleIn {
            0% { transform: scale(0); }
            70% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        
        .success-content h3 {
            color: #4CAF50;
            margin-bottom: 15px;
            font-size: 24px;
        }
        
        .success-content p {
            color: #aaa;
            margin-bottom: 20px;
            font-size: 16px;
        }
        
        .success-details {
            background: rgba(0, 191, 255, 0.05);
            padding: 15px;
            border-radius: 10px;
            margin: 20px 0;
            text-align: left;
            color: #ddd;
            font-size: 14px;
            line-height: 1.6;
            border: 1px solid rgba(0, 191, 255, 0.1);
        }
        
        .success-note {
            color: #888;
            font-size: 14px;
            font-style: italic;
            margin-top: 15px;
        }
        
        .success-close {
            padding: 12px 35px;
            background: linear-gradient(135deg, #00bfff, #1e90ff);
            border: none;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            transition: all 0.3s;
            font-family: inherit;
            font-size: 14px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-top: 20px;
            width: 100%;
        }
        
        .success-close:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 191, 255, 0.4);
        }
        
        @media (max-width: 768px) {
            .success-content {
                padding: 30px 20px;
            }
            
            .success-icon {
                font-size: 40px;
            }
            
            .success-content h3 {
                font-size: 22px;
            }
        }
    `;
    
    document.head.appendChild(successStyle);
    document.body.appendChild(successMsg);
    
    // Close success message
    successMsg.querySelector('.success-close').addEventListener('click', function() {
        document.body.removeChild(successMsg);
        document.head.removeChild(successStyle);
    });
    
    // Auto-close after 10 seconds
    setTimeout(() => {
        if (document.body.contains(successMsg)) {
            document.body.removeChild(successMsg);
            document.head.removeChild(successStyle);
        }
    }, 10000);
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

// Profile image fallback
function setupImageFallbacks() {
    const profileImg = document.getElementById('profileImg');
    const aboutProfileImg = document.querySelector('.about-profile-img');
    
    // Create SVG placeholder for fallback
    const createSVGPlaceholder = (text, isCircle = true) => {
        const shape = isCircle ? 
            `<circle cx="200" cy="200" r="180" fill="none" stroke="#00bfff" stroke-width="3" stroke-opacity="0.3" />` :
            `<rect width="380" height="380" x="10" y="10" rx="20" fill="none" stroke="#00bfff" stroke-width="3" stroke-opacity="0.3" />`;
        
        return `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
                <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#00bfff;stop-opacity:0.1" />
                        <stop offset="100%" style="stop-color:#1e90ff;stop-opacity:0.1" />
                    </linearGradient>
                </defs>
                <rect width="400" height="400" fill="url(#grad)" />
                ${shape}
                <text x="200" y="220" font-family="Arial" font-size="120" font-weight="bold" 
                      fill="#00bfff" text-anchor="middle" opacity="0.8">${text}</text>
            </svg>
        `)}`;
    };
    
    // Set fallback for hero profile image
    if (profileImg) {
        profileImg.onerror = function() {
            this.onerror = null; // Prevent infinite loop
            this.src = createSVGPlaceholder('S', true);
            this.style.objectFit = 'none';
        };
        
        // Pre-check if image exists
        const testImg = new Image();
        testImg.src = profileImg.src;
        testImg.onerror = function() {
            profileImg.src = createSVGPlaceholder('S', true);
            profileImg.style.objectFit = 'none';
        };
    }
    
    // Set fallback for about profile image
    if (aboutProfileImg) {
        aboutProfileImg.onerror = function() {
            this.onerror = null; // Prevent infinite loop
            this.src = createSVGPlaceholder('S', false);
            this.style.objectFit = 'none';
            this.style.borderRadius = '20px';
        };
        
        // Pre-check if image exists
        const testAboutImg = new Image();
        testAboutImg.src = aboutProfileImg.src;
        testAboutImg.onerror = function() {
            aboutProfileImg.src = createSVGPlaceholder('S', false);
            aboutProfileImg.style.objectFit = 'none';
            aboutProfileImg.style.borderRadius = '20px';
        };
    }
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupImageFallbacks();
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

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Close modal on Escape
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.download-modal, .download-progress, .download-success');
        modals.forEach(modal => {
            if (document.body.contains(modal)) {
                document.body.removeChild(modal);
            }
        });
    }
});