// Typing Terminal Effect
const terminal = document.getElementById('terminal');
const commands = [
    'shyclone@dashboard:~$ whoami',
    'Shyclone - Cybersecurity Student',
    'shyclone@dashboard:~$ ls skills/',
    'pentesting forensics tools linux docker networking trading kotlin ielts',
    'shyclone@dashboard:~$ cat projects.txt',
    'rider-comm-device tradingview-strategy 3d-portfolio walkie-talkie-app',
    'shyclone@dashboard:~$ echo "Earn big. Build big."',
    'Earn big. Build big.'
];

let commandIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeTerminal() {
    if (commandIndex < commands.length) {
        const currentCommand = commands[commandIndex];
        if (charIndex < currentCommand.length) {
            terminal.textContent += currentCommand[charIndex];
            charIndex++;
            setTimeout(typeTerminal, 100);
        } else {
            terminal.textContent += '\n';
            charIndex = 0;
            commandIndex++;
            setTimeout(typeTerminal, 1000);
        }
    }
}

// Removed To-Do List Functionality as per user request

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Hover Effects for Cards
const cards = document.querySelectorAll('.skill-card, .project-card, .milestone-card, .widget');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Particle Effect (Optional)
function createParticles() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        hero.appendChild(particle);
    }
}

// Parallax Interaction
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-layer, .digital-grid, .circuit-patterns, .network-nodes, .floating-icons, .particles, .holographic-elements');

    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;

            element.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    // Add subtle scroll parallax
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.1;
            element.style.transform += ` translateY(${rate * speed}px)`;
        });
    });
}

// Loading Animation
function initLoadingAnimation() {
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
    loadingScreen.innerHTML = `
        <div class="loading-content">
            <div class="neon-loader">
                <div class="loader-bar"></div>
                <div class="loader-text">INITIALIZING SHYCLONE MATRIX...</div>
            </div>
            <div class="glitch-text">SHYCLONE</div>
        </div>
    `;
    document.body.appendChild(loadingScreen);

    // Simulate loading time
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.remove();
        }, 1000);
    }, 3000);
}

// Scroll Glow Effect
function initScrollGlow() {
    const glowElement = document.createElement('div');
    glowElement.className = 'scroll-glow';
    document.body.appendChild(glowElement);

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.001;
        glowElement.style.opacity = Math.min(rate, 0.3);
        glowElement.style.transform = `scale(${1 + rate * 0.5})`;
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initLoadingAnimation();
    setTimeout(() => {
        typeTerminal();
        animateProgressBars();
        createParticles();
        initParallax();
        initScrollGlow();
    }, 3000);
});



// Add particle styles dynamically
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .particle {
        position: absolute;
        width: 2px;
        height: 2px;
        background: #00ffff;
        border-radius: 50%;
        animation: float 10s linear infinite;
        opacity: 0.7;
    }

    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); }
        100% { transform: translateY(-100px) rotate(360deg); }
    }
`;
document.head.appendChild(particleStyle);
