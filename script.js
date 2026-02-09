function playMusic() {

  const music = document.getElementById("bgMusic");

  music.volume = 0.6;

  music.play();
  
  function startSurprise() {

  // play music

  const music = document.getElementById("bgMusic");

  music.volume = 0.6;

  music.loop = true;

  music.play();

  // create pop hearts

  for (let i = 0; i < 20; i++) {

    const pop = document.createElement("div");

    pop.className = "pop";

    pop.innerText = "💖";

    pop.style.left = Math.random() * window.innerWidth + "px";

    pop.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(pop);

    setTimeout(() => pop.remove(), 1500);

  }

}

}