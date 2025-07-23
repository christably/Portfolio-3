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
    const thankYouBox = document.createElement("div");
    thankYouBox.className = "thank-you-box";
    thankYouBox.innerHTML = "Thank you! 💃"; // 💃 = dancing woman emoji
    formWrapper.appendChild(thankYouBox);

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

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        form.style.transition = "transform 1s ease";
        form.style.transform = "translateX(100%)";

        setTimeout(() => {
            form.style.display = "none";
            thankYouBox.style.display = "flex";
        }, 1000);

        setTimeout(() => {
            thankYouBox.style.display = "none";
            form.style.display = "block";
            form.style.transform = "translateX(0)";
            animatePlaceholders();
        }, 7000);
    });

    function clearAllTimers() {
        typingTimers.forEach(t => clearTimeout(t));
        typingTimers = [];
    }

    animatePlaceholders(); // Start animation initially
});










