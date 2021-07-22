let player;
let backgroundImage;
let playerImage;
let obstacleImage;
let obstacles = [];
let wordClassifier;

function preload() {
  backgroundImage = loadImage("background.jpg");
  playerImage = loadImage("player.png");
  obstacleImage = loadImage("obstacle.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("SpeechCommans18w", options);
}

function setup() {
  createCanvas(1000, 600);
  stroke(62, 11, 230);
  strokeWeight(8);
  player = new Player();
  wordClassifier.classify(hearWord);
}
function hear(error, results) {
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  background(backgroundImage);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs)) {
      console.log("game over");
      noLoop();
    }
  }
}
