function setup() {
  createCanvas(1000, 800);
  background("#500C5C");
}

function draw() {
  fill("#D616F7");
  stroke("black");
  if (mouseIsPressed)
  circle(mouseX,mouseY,70);
}
