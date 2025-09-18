// Global variables and data
let currentTypingIndex = 0;
let currentTextIndex = 0;
let isTyping = true;
let isFormSubmitted = false;

const typingTexts = [
    'Navigate your next',
    'Digital transformation',
    'Innovation at scale', 
    'Future-ready solutions'
];

// Timeline data - made smaller as requested
const journeyData = [
    {
        year: '1981',
        title: 'Foundation',
        description: 'Started by seven engineers with a vision to transform the technology landscape.'
    },
    {
        year: '1993',
        title: 'Going Public', 
        description: 'First Indian company to list on NASDAQ, setting new industry standards.'
    },
    {
        year: '2008',
        title: 'Innovation Focus',
        description: 'Launched consulting services and expanded beyond traditional IT solutions.'
    },
    {
        year: '2023',
        title: 'AI Revolution',
        description: 'Leading digital transformation with AI-powered solutions for enterprises.'
    }
];

// Skills data
const skillsData = [
    {
        title: 'Cloud Computing',
        description: 'Comprehensive cloud solutions and migration services',
        icon: '☁️',
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes']
    },
    {
        title: 'Artificial Intelligence',
        description: 'AI and machine learning solutions for business transformation',
        icon: '🤖',
        technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision']
    },
    {
        title: 'Data & Analytics',
        description: 'Advanced analytics and business intelligence solutions',
        icon: '📊',
        technologies: ['Big Data', 'Power BI', 'Tableau', 'Apache Spark']
    },
    {
        title: 'Digital Experience',
        description: 'User-centric digital experiences and mobile solutions',
        icon: '📱',
        technologies: ['React', 'Angular', 'Flutter', 'React Native']
    },
    {
        title: 'Cybersecurity',
        description: 'Comprehensive security solutions and risk management',
        icon: '🔒',
        technologies: ['Zero Trust', 'SIEM', 'Cloud Security', 'Identity Management']
    },
    {
        title: 'Automation',
        description: 'Intelligent process automation and RPA solutions',
        icon: '⚙️',
        technologies: ['RPA', 'Workflow Automation', 'DevOps', 'CI/CD']
    },
    {
        title: 'Blockchain',
        description: 'Distributed ledger technologies and smart contracts',
        icon: '🔗',
        technologies: ['Ethereum', 'Hyperledger', 'Smart Contracts', 'DeFi']
    },
    {
        title: 'IoT Solutions',
        description: 'Connected devices and smart system implementations',
        icon: '🌐',
        technologies: ['Industrial IoT', 'Edge Computing', 'Sensors', 'Analytics']
    }
];

// Culture values data
const cultureData = [
    {
        title: 'Diversity & Inclusion',
        description: 'We believe diverse perspectives drive innovation. Our inclusive culture welcomes everyone, fostering creativity and breakthrough solutions.',
        icon: '🤝'
    },
    {
        title: 'Learning & Growth',
        description: 'Continuous learning is at our core. We invest in our people through training programs, mentorship, and opportunities to explore new technologies.',
        icon: '📚'
    },
    {
        title: 'Innovation Culture',
        description: 'We encourage experimentation and creative thinking. Our innovation labs and hackathons provide platforms to turn ideas into reality.',
        icon: '💡'
    },
    {
        title: 'Work-Life Balance',
        description: 'We prioritize employee wellbeing with flexible work arrangements, wellness programs, and initiatives that support personal and professional growth.',
        icon: '⚖️'
    }
];

// Testimonials data
const testimonialsData = [
    {
        name: 'Sarah Chen',
        role: 'Senior Software Engineer',
        quote: 'The learning opportunities here are incredible. I\'ve grown both technically and personally.',
        rating: 5
    },
    {
        name: 'Rajesh Kumar',
        role: 'Data Scientist',
        quote: 'The collaborative environment and diverse team make every project an exciting challenge.',
        rating: 5
    },
    {
        name: 'Maria Rodriguez',
        role: 'Product Manager',
        quote: 'Infosys truly values work-life balance while maintaining excellence in delivery.',
        rating: 5
    }
];

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriter();
    createTimelineItems();
    createSkillsCards();
    createCultureValues();
    createTestimonials();
    setupScrollAnimations();
    setupMobileMenu();
});

// Typewriter effect
function initializeTypewriter() {
    const textElement = document.getElementById('typewriterText');
    const currentText = typingTexts[currentTextIndex];
    
    if (isTyping) {
        if (currentTypingIndex < currentText.length) {
            textElement.textContent = currentText.slice(0, currentTypingIndex + 1);
            currentTypingIndex++;
            setTimeout(initializeTypewriter, 100);
        } else {
            // Finished typing current text, wait then start erasing
            setTimeout(() => {
                isTyping = false;
                initializeTypewriter();
            }, 2000);
        }
    } else {
        // Erasing
        if (currentTypingIndex > 0) {
            textElement.textContent = currentText.slice(0, currentTypingIndex - 1);
            currentTypingIndex--;
            setTimeout(initializeTypewriter, 50);
        } else {
            // Finished erasing, move to next text
            currentTextIndex = (currentTextIndex + 1) % typingTexts.length;
            isTyping = true;
            setTimeout(initializeTypewriter, 500);
        }
    }
}

// Create timeline items for the Our Journey section
function createTimelineItems() {
    const container = document.getElementById('timelineItems');
    
    journeyData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-index', index);

        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
            </div>
        `;

        container.appendChild(timelineItem);
    });
}

// Create skills cards
function createSkillsCards() {
    const container = document.getElementById('skillsGrid');
    
    skillsData.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.setAttribute('data-index', index);

        const techTags = skill.technologies.slice(0, 2).map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        const extraCount = skill.technologies.length > 2 ? 
            `<span class="tech-tag" style="background: var(--muted); color: var(--muted-foreground);">+${skill.technologies.length - 2}</span>` : '';

        skillCard.innerHTML = `
            <span class="skill-icon">${skill.icon}</span>
            <h3 class="skill-title">${skill.title}</h3>
            <p class="skill-description">${skill.description}</p>
            <div class="tech-tags">
                ${techTags}
                ${extraCount}
            </div>
        `;

        container.appendChild(skillCard);
    });
}

// Create culture values
function createCultureValues() {
    const container = document.getElementById('cultureValues');
    
    cultureData.forEach((value, index) => {
        const valueElement = document.createElement('div');
        valueElement.className = 'culture-value';
        if (index === 0) valueElement.classList.add('active'); // First item active by default
        
        valueElement.innerHTML = `
            <div class="culture-value-header">
                <span class="culture-value-icon">${value.icon}</span>
                <h4 class="culture-value-title">${value.title}</h4>
            </div>
            <p class="culture-value-description">${value.description}</p>
        `;

        valueElement.addEventListener('click', () => {
            // Remove active class from all values
            document.querySelectorAll('.culture-value').forEach(el => el.classList.remove('active'));
            // Add active class to clicked value
            valueElement.classList.add('active');
        });

        container.appendChild(valueElement);
    });
}

// Create testimonials
function createTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    
    testimonialsData.forEach((testimonial, index) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';

        const stars = '★'.repeat(testimonial.rating);

        testimonialCard.innerHTML = `
            <div class="stars">${stars}</div>
            <p class="testimonial-quote">"${testimonial.quote}"</p>
            <div class="testimonial-author">
                <div class="author-name">${testimonial.name}</div>
                <div class="author-role">${testimonial.role}</div>
            </div>
        `;

        container.appendChild(testimonialCard);
    });
}

// Scroll animations using Intersection Observer
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for staggered animations
                if (entry.target.classList.contains('skill-card')) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

// Mobile menu functionality
function setupMobileMenu() {
    // Already handled by toggleMobileMenu function
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerHeight = 64;
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    }
}

// Contact form handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const form = document.getElementById('contactForm');
    const formContainer = document.getElementById('contactFormContainer');
    
    // Show loading state
    submitBtn.innerHTML = '<span class="loading"></span> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        // Show success message
        formContainer.innerHTML = `
            <div class="success-message">
                <div class="success-icon">✓</div>
                <h4 style="font-size: 1.3rem; margin-bottom: 10px;">Thank You!</h4>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
        `;
        
        // Reset form after 3 seconds
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = 'Send Message';
            submitBtn.disabled = false;
            formContainer.innerHTML = form.outerHTML;
        }, 3000);
        
    }, 2000);
}

// Add some scroll effects to header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Add some interactive effects
document.addEventListener('click', (e) => {
    // Log clicks for demonstration (remove in production)
    if (e.target.matches('.social-link')) {
        console.log('Social link clicked:', e.target.textContent);
    }
    
    if (e.target.matches('.skill-card')) {
        console.log('Skill card clicked');
    }
});

// Add some keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('active');
    }
});