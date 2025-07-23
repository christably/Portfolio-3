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
    const inputs = form.querySelectorAll("input, textarea");
    const contactFormWrapper = document.querySelector(".contact-form");

    let animationStopped = false;

    const placeholders = {
        name: "Jane Doe",
        email: "jane@example.com",
        subject: "Let's Connect!",
        message: "Hi Christabel, I love your portfolio!"
    };

    // Reset all fields
    function resetFormFields() {
        inputs.forEach((field) => {
            field.value = "";
        });
    }

    // Simulate typing into one field at a time
    async function typePlaceholder(field, text) {
        field.value = "";
        for (let i = 0; i < text.length; i++) {
            if (animationStopped) return;
            field.value += text[i];
            await new Promise((res) => setTimeout(res, 80));
        }
    }

    // Sequentially type in all placeholders
    async function animateFormFilling() {
        animationStopped = false;
        resetFormFields();

        await typePlaceholder(form.name, placeholders.name);
        await typePlaceholder(form.email, placeholders.email);
        await typePlaceholder(form.subject, placeholders.subject);
        await typePlaceholder(form.message, placeholders.message);
    }

    // Show thank you message and reset animation
    function showThankYouAndReset() {
        // Create thank-you overlay
        const thankYouBox = document.createElement("div");
        thankYouBox.className = "thank-you-box";
        thankYouBox.innerHTML = `<p>Thank you! 💃</p>`;
        contactFormWrapper.appendChild(thankYouBox);

        // Animate form sliding out
        contactFormWrapper.classList.add("slide-out");

        setTimeout(() => {
            thankYouBox.style.display = "flex";
            contactFormWrapper.classList.remove("slide-out");

            setTimeout(() => {
                thankYouBox.remove();
                resetFormFields();
                if (!animationStopped) animateFormFilling();
            }, 6000);
        }, 800); // Match the CSS transition
    }

    // Stop animation if user interacts
    inputs.forEach((field) => {
        field.addEventListener("focus", () => {
            animationStopped = true;
        });
    });

    // Trigger thank you transition on submit
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        animationStopped = true;
        showThankYouAndReset();
    });

    // Start animation initially
    animateFormFilling();
});


