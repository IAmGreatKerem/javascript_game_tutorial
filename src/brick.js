import { detectCollision } from "./collisionDetection";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this) === 0) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }

    if (detectCollision(this.game.ball, this) === 1) {
      this.game.ball.speed.x = -this.game.ball.speed.x;

      this.markedForDeletion = true;
    }
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
