function playMusic() {
    // Play original fast song
    let audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
    audio.volume = 0.7;
    audio.play();

    // Emojis flying
    const emojis = ["💖","💕","💗","💓","💞","💘","🥳","🎉","✨","🎊"];
    
    for (let i = 0; i < 80; i++) {
        let el = document.createElement("div");
        el.classList.add("emoji");
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        // Random start positions
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.top = window.innerHeight + Math.random() * 50 + "px";
        el.style.fontSize = 20 + Math.random() * 30 + "px";

        document.body.appendChild(el);

        // Animate flying up with horizontal drift
        let drift = (Math.random() - 0.5) * 200;
        setTimeout(() => {
            el.style.top = "-100px";
            el.style.left = (parseFloat(el.style.left) + drift) + "px";
            el.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
            el.style.opacity = 0;
        }, 50);

        // Remove after animation
        setTimeout(() => {
            el.remove();
        }, 4000);
    }
                }
