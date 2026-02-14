const music = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");

function playMusic() {
  music.play();
  createHearts();
}

function createHearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 2s ease-out forwards";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}

  



