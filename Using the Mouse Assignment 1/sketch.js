//global variables
let size = 100
function setup(){
    createCanvas(800, 600);
}
function draw() {
  //not used but required for a functional code
}
function mouseMoved() {
  //when the mouse moves the object moves with it
  //clear trail of object
  background(255);
  //draw object
  ellipse(mouseX, mouseY,size,size/4);
  ellipse(mouseX,mouseY,size/4,size);
  //moving the mouse makes the size smaller
  size=size-1
  if (size>width-size || mouseX<0){
      mouseXSpeed*=-1
  }
}
function mouseClicked() {
  // This function is called whenever the mouse is clicked
  // (but the mouse must not be moving at the same time)
  // and will change the fill colour randomly
  fill(random(255), random(255), random(255));
  //each mouse click the object gets bigger
  size=size+25
}
