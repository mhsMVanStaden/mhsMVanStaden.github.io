var mySound; //variable to hold sound
var img;
function preload(){
  //loads sound file variable
  mySound = loadSound('Mario Here We Go.mp3');
  img = loadImage('MarioFace.png');
}
function setup() {
  // put setup code here
  //put canvas for image
  createCanvas(213,236,)
  //put variable name in front
  mySound.setVolume(0.1);
  mySound.play();

}

function draw(){
  //Create background for image
  background(0);
  image(img,0,0,0,0);
}
