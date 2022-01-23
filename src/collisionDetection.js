export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftSideOfBall = ball.position.x;
  let rightSideOfBall = ball.position.x + ball.size;

  let topOfObject = gameObject.position.y;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomOfObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    ball.position.x >= leftSideOfObject &&
    ball.position.x + ball.size <= rightSideOfObject
  ) {
    return 0;
  }
  if (
    leftSideOfBall <= rightSideOfObject &&
    rightSideOfBall >= leftSideOfObject &&
    ball.position.y <= bottomOfObject &&
    ball.position.y + ball.size >= topOfObject
  ) {
    return 1;
  } else {
    return 2;
  }
}
