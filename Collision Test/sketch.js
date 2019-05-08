//global variables
let x1 = 0;
let x2 = 600;
let y = 300;
let size = 50;
let x1Speed=5;
let x2Speed=5;
let hit = false;

function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  //check for collision
  hit = collideRectRect(x1,y,size,size,x2,y,size,size);
  //output a statement for console
  print(hit);
  if (hit===true) {
    //hit enemy block triggers game over screen
    background(255,0,0);
    fill(0);
    textFont('Bungee');
    textSize(60);
    textAlign(CENTER,CENTER);
    text('GAME OVER',400,300);
  }
  else {
    background(0);
    //Your block
    fill(0,255,0);
    rect(x1,y,size,size);
    //enemy block, no touching
    fill(255,0,0);
    rect(x2,y,size,size);
    //Make object bounce
    x1+=x1Speed;
    x2+=x2Speed;
    if (x1>width-size || x1<0){
    x1Speed*=-1
    }
    if (x2>width-size || x2<0){
    x2Speed*=-1
    }
  }
}
