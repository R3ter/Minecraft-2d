const background = document.getElementById("startgame");
console.log(Math.floor(Math.random() * (5 - 1 + 1)) + 1);
background.style.backgroundImage = `url("./Backgrounds/${
  Math.floor(Math.random() * (5 - 1 + 1)) + 1
}.gif")`;
