//position of variables
let x1= 0;
let y1= 300;
let x2=700;
let y2=300;
let size=25
//projectile Variables
let x3=400;
let y3=300;
let projectileX=4;
let projectileY=4;
let hit= false;
let hit2= false;
let gamePlay = false;

function setup() {
  createCanvas(800,600);
}

function draw() {
 //end game if either player is hit
 hit= collideRectRect(x3,y3,size*4,size*4,x1,y1,size,size);
 hit2= collideRectRect(x3,y3,size*4,size*4,x2,y2,size,size);
 //output statement for console
 print(hit);
 //If a player is hit the game ends
 if (hit===true){
   background(0);
   textFont('Banshee');
   fill(0,0,255);
   textSize(100);
   text('Player 2 Wins',120,300);
   textSize(35);
   fill(255);
   text('Refresh the Page to Play Again',175,400);
   noLoop();
   //keep the end screen
 }
 if (hit2===true){
     background(0);
     textFont('Banshee');
     fill(255,0,0);
     textSize(100);
     text('Player 1 Wins',120,300);
     textSize(35);
     fill(255);
     text('Refresh the Page to Play Again',175,400);
     noLoop();
     //keep the end screen
 }
 if (gamePlay==false) {
    background(0);  //background
    fill(255);
    //Game title
    textFont('Banshee');
    textSize(200);
    text('Log Fire',50,height/3.6);
    textSize(35);
    //Player presses enter to begin game
    text('Press Enter to Start Game',210,height/2.4);
    //show controls and who player 1 is
    textSize(50);
    fill(255,0,0);
    text('Player 1', 50, height/2);
    rect(110,330,25,25);
    textSize(20);
    text('Use WASD to move',50,400);
    textSize(50);
    fill(0,0,255);
    text('Player 2', 575,height/2);
    textSize(20);
    rect(640,325,25,25);
    text('Use IJKL to move',575,400);
    fill(255);
    textSize(50);
    rect(x3-60,y3+150,100,100);
    text('Do Not Touch',250,350);
    text('Block',325,400);
  }
  if (gamePlay===true){
      background(0);
      //player 1 rectangle
      fill(255,0,0);
      rect(x1,y1,size,size);
      fill(0,0,255);
      //player 2 rectangle
      rect(x2,y2,size,size);
      fill(255);
      rect(x3,y3,size*4,size*4);
    //create player 1 and player 2 boundaries
    if (y1<0){
      y1=y1+2
    }
    if (y2<0){
      y2=y2+2
    }
    if (y1>575){
      y1=y1-2
    }
    if (y2>575){
      y2-=2
    }
    if (x1<0){
      x1=x1+2
    }
    if (x1>775){
      x1=x1-2
    }
    if (x2<0){
      x2=x2+2
    }
    if (x2>775){
      x2=x2-2
    }
    //Make projectile move and bounce on walls
    x3+=projectileX;
    y3+=projectileY;
    if(y3+100>=height || y3<=0){
      projectileY= projectileY*(-1);
      //increase difficulty over time
      projectileX+=2
    }
    if(x3+100>=width || x3<=0){
      projectileX=projectileX*(-1);
    }
  }
  //player one controls
  if (keyIsDown(87)){
    y1-=2
  }
  if (keyIsDown(65)){
    x1-=2
  }
  if (keyIsDown(83)){
    y1+=2
  }
  if (keyIsDown(68)){
    x1+=2
  }
  //Player 2 controls
  if (keyIsDown(73)){
    y2-=2
  }
  if (keyIsDown(74)){
    x2-=2
  }
  if (keyIsDown(75)){
    y2+=2
  }
  if (keyIsDown(76)){
    x2+=2
  }
}
function keyPressed(){
  //detect whether to start the game
  if (keyCode === 13){
    //clear the canvas and have players appear
    gamePlay = true;
    }
  }
