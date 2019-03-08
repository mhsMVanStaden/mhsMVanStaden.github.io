function setup() {
  // put setup code here
  //create a canvas
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255,255,0);
  //make variables for hight and width
  var houseWidth = 100;
  var roofWidth = 100;
  var x = 200;
  var y = 200;
  var scale = 3;
  //base of house
  strokeWeight(2)
  rect(width/2, height/2, houseWidth, houseWidth/2);
  //ground

  //fancy roof
  strokeWeight(5);
  triangle(x+ houseWidth/scale,y- houseWidth/scale,x,y,x+ houseWidth/scale,y);
}
