function playMusic() {
    // Flying emojis and hearts
    const emojis = ["💖","💕","💗","💓","💞","💘","🥳","🎉","✨","🎊"];

    // Create 50 emojis at once
    for (let i = 0; i < 50; i++) {
        let el = document.createElement("div");
        el.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.position = "fixed";
        el.style.left = Math.random() * window.innerWidth + "px";
        el.style.top = window.innerHeight + "px";
        el.style.fontSize = 20 + Math.random() * 30 + "px";
        el.style.zIndex = 9999;
        el.style.pointerEvents = "none";
        el.style.transition = "all 3s linear";

        document.body.appendChild(el);

        setTimeout(() => {
            el.style.top = "-100px";
            el.style.transform = "rotate(" + (Math.random() * 360) + "deg)";
            el.style.opacity = 0;
        }, 50);

        setTimeout(() => {
            el.remove();
        }, 3000);
    }
                }
