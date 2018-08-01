function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10)
  stroke(255, 102, 0);
  arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);

  return false;
}