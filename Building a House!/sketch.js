/*
house assignment
Created by Michael van Staden
March 18, 2019
*/
function setup() {
  //create a canvas
  createCanvas(800,600);
}

function draw() {
  //change this variable to scale the house
  let houseWidth = 250;
  // put drawing code here
  //sky
  background(0,200,255);
  line(0,height/2,width,height/2)
  //ground
  fill(0,200,0)
  rect(0,height/2,width,height/2)
  strokeWeight(houseWidth/10)
  //three houses connected (townhouse)
  fill(0,0,255);
  rect(width/3, height/2, -houseWidth,houseWidth/2);
  rect(width/3, height/2, houseWidth+houseWidth,houseWidth/2);
  rect(width/3, height/2, houseWidth,houseWidth/2);
  //fancy roof
  fill(255,0,0);
  triangle(width/3-houseWidth,height/2,width/3+houseWidth/2,height/2-houseWidth,width/3+houseWidth*2,height/2)
//doors
  rect(width/3-houseWidth/1.5, height/2+houseWidth/6, houseWidth/4, houseWidth/3);
  rect(width/3+houseWidth/2.5, height/2+houseWidth/6, houseWidth/4, houseWidth/3);
  rect(width/3+houseWidth+houseWidth/2.5, height/2+houseWidth/6, houseWidth/4, houseWidth/3);
  //window in triangle
  fill(0,0,255)
  circle(width/3+houseWidth/2,height/2-houseWidth/2,houseWidth/4)
}
