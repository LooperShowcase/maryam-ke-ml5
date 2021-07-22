class Player {
  constructor() {
    this.size = 100;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1;
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -25;
    }
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    image(playerImage, this.x, this.y, this.size, this.size);
  }

  collided(currentObs) {
    let colliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      currentObs.x,
      currentObs.y,
      currentObs.size,
      currentObs.size
    );
    return colliding;
  }
}
