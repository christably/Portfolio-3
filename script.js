const creative = document.getElementById('creative');
const spans = creative.querySelectorAll('span');

// Utility: Reset & Restart the text animation
function restartTextAnimation() {
  spans.forEach((span, index) => {
    span.style.animation = 'none';
    span.offsetHeight; // force reflow
    span.style.animation = `wordFade 1s ease-out forwards`;
    span.style.animationDelay = `${index + 1}s`;
  });
}

// 1️⃣ Play on initial load
window.addEventListener('DOMContentLoaded', () => {
  restartTextAnimation();
});

// 2️⃣ Replay when user scrolls to the top
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    restartTextAnimation();
  }
});

// 3️⃣ Replay every 2 minutes if mouse is near top
let mouseNearTop = false;

document.addEventListener('mousemove', (e) => {
  mouseNearTop = e.clientY < 100;
});

setInterval(() => {
  if (mouseNearTop) {
    restartTextAnimation();
  }
}, 60000); // every 1 minutes (120000 ms)








document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formWrapper = document.querySelector(".contact-form");
    const fields = [
        { id: "name", placeholder: "Jane Doe" },
        { id: "email", placeholder: "jane@example.com" },
        { id: "subject", placeholder: "Let’s collaborate" },
        { id: "message", placeholder: "Hi, I’d love to work with you!" },
    ];

    let typingTimers = [];

    // Add Thank You box dynamically
    // Animate placeholders one-by-one
    function animatePlaceholders() {
        clearAllTimers();
        fields.forEach(field => {
            document.getElementById(field.id).value = "";
            document.getElementById(field.id).placeholder = "";
        });

        let delay = 0;
        fields.forEach((field, index) => {
            const input = document.getElementById(field.id);
            const text = field.placeholder;
            delay += 1000;

            typingTimers.push(setTimeout(() => {
                let charIndex = 0;
                const typeInterval = setInterval(() => {
                    input.placeholder += text[charIndex];
                    charIndex++;
                    if (charIndex === text.length) clearInterval(typeInterval);
                }, 60);
                typingTimers.push(typeInterval);
            }, delay));
        });
    }

    // Stop animation when user interacts
    form.addEventListener("click", () => clearAllTimers());

    function clearAllTimers() {
        typingTimers.forEach(t => clearTimeout(t));
        typingTimers = [];
    }

    animatePlaceholders(); // Start animation initially
});




const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListner('click', () => {
  navLinks.classList.toggle('nav-active');
});
