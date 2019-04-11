//Global Variables
let x=100;
let y=100;
let xSpeed=10;
let ySpeed=10;
let size= 100;
function setup() {
  // put setup code here
  createCanvas(800,600);
}
// || = OR
function draw() {
  // put drawing code here
  //change the background
  background(0);
  //move the rectangle
  fill(255);
  noStroke();
  ellipse(x,y,size+size,size);
  ellipse(x,y,size,size+size);
  noStroke();
  rect(100, 500, size*5, size/4);
  x+=xSpeed;
  y=y+ySpeed;
  if(y+size>=height || y<=0){
    ySpeed= ySpeed*(-1);
  }
  if(x+size>=width || x<=0){
    xSpeed=xSpeed*(-1);
  }
  if(y+400>=800){
    ySpeed=ySpeed*(-1);
  }
}
