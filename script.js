// Audio
let audio = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_8b0f1c0b5e.mp3");

// Function to play music and trigger celebration
function playMusic() {
    // Play audio
    audio.play();

    // Trigger celebration
    createCelebration();
}

// Function to create flying hearts/confetti
function createCelebration() {
    // Number of flying elements
    let total = 50;

    for (let i = 0; i < total; i++) {
        let emoji = document.createElement("div");
        emoji.classList.add("emoji");

        // Pick random emoji from list
        let emojiList = ["❤️", "💖", "💘", "💝", "🎉", "✨", "🎊"];
        emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];

        // Random start position
        emoji.style.left = Math.random() * window.innerWidth + "px";

        // Random size
        let size = Math.random() * 30 + 15;
        emoji.style.fontSize = size + "px";

        // Random animation duration
        emoji.style.animationDuration = (Math.random() * 2 + 2) + "s";

        // Append to body
        document.body.appendChild(emoji);

        // Remove after animation
        emoji.addEventListener("animationend", () => {
            emoji.remove();
        });
    }
}
