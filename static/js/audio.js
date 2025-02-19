document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-audio");

    function playAudio() {
        audio.play().then(() => {
            console.log("Audio playing automatically!");
        }).catch(error => {
            console.warn("Autoplay blocked! Waiting for user interaction...");
        });
    }

    // Try to play on page load
    playAudio();

    // If blocked, play on first user interaction (click, scroll, keypress)
    document.addEventListener("click", playAudio, { once: true });
    document.addEventListener("keydown", playAudio, { once: true });
    document.addEventListener("scroll", playAudio, { once: true });
});
