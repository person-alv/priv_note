document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll(".typing-effect p");

    paragraphs.forEach((paragraph, index) => {
        const text = paragraph.textContent; // Get text from paragraph
        paragraph.textContent = ""; // Clear content for typing effect
        let i = 0;

        function type() {
            if (i < text.length) {
                paragraph.textContent += text[i];
                i++;
                setTimeout(type, Math.random() * 100 + 30); // Increased typing speed
            } else {
                paragraph.style.borderRight = "none"; // Remove cursor at end
            }
        }

        setTimeout(type, index * 1500); // Delay next paragraph typing
    });
});

