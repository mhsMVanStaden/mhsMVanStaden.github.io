function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
// The ground
background(255,255,255);
fill(0, 255, 0);
rect(0, 300, 400, 100);

// The sun
fill(255,255,0);
ellipse(80, 64, 100, 100);

// The snowman
fill(255,255,250);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
}
