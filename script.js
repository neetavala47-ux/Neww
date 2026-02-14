function playMusicAndCelebrate() {

  // Softer instrumental music
  const music = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
  music.volume = 0.7;
  music.play();

  startCelebration();
}

function startCelebration() {

  const symbols = ["❤️","💖","💘","💝","🥰","😍","🎉","✨","💞","🌸","🎊","💓","🥳","🎀"];

  setInterval(() => {

    const element = document.createElement("div");
    element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    element.style.position = "fixed";
    element.style.left = Math.random() * 100 + "vw";
    element.style.top = "100vh";
    element.style.fontSize = (25 + Math.random() * 45) + "px";
    element.style.zIndex = "9999";
    element.style.pointerEvents = "none";
    element.style.transition = "transform 4s linear, opacity 4s linear";

    document.body.appendChild(element);

    setTimeout(() => {
      element.style.transform = "translateY(-120vh)";
      element.style.opacity = "0";
    }, 50);

    setTimeout(() => {
      element.remove();
    }, 4000);

  }, 80); // 80 = VERY MANY emojis
}
