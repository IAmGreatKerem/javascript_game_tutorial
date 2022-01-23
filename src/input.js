export default class InputHandler {
  constructor(paddle, game) {
    document.addEventListener("keydown", (event) => {
      /*alert(event.code);*/
      switch (event.code) {
        case "ArrowLeft":
          paddle.moveLeft();
          break;
        case "ArrowRight":
          paddle.moveRight();
          break;
        case "Escape":
          game.togglePause();
          break;
        case "Space":
          game.start();
          break;
        default:
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      /*alert(event.code);*/
      switch (event.code) {
        case "ArrowLeft":
          if (paddle.speed < 0) paddle.stop();
          break;
        case "ArrowRight":
          if (paddle.speed > 0) paddle.stop();
          break;
        default:
          break;
      }
    });
  }
}
