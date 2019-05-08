//position of variables
let x1= 0;
let y1= 300;
let x2=700;
let y2=300;
let size=25
//projectile Variables
let x3=400;
let y3=300;
let x4=500;
let y4=400;
let x5=300;
let y5=200;
let projectileX=4;
let projectileY=4;
let projectileX2=5;
let projectileY2=5;
let projectileX3=6;
let projectileY3=6;

let hit= false;
let hit2= false;

let hitGamePlay2_1=false;
let hitGamePlay2_2=false;
let hitGamePlay2_3=false;
let hitGamePlay2_4=false;
let hitGamePlay2_5=false;
let hitGamePlay2_6=false;

//
let gamePlay = false;
let gamePlay2 = false;
function setup() {
  createCanvas(800,600);
}

function draw() {
  //If a player is hit end the game and reveal the winner (Difficulty Easy)
  if (gamePlay === true){
  hit= collideRectRect(x3,y3,size*4,size*4,x1,y1,size,size);
  hit2= collideRectRect(x3,y3,size*4,size*4,x2,y2,size,size);
  }
  //If a player is hit end the game and reveal the winner (Difficulty Hard)
  if (gamePlay2 === true){
   hitGamePlay2_1= collideRectRect(x3,y3,size/2,size/2,x1,y1,size,size);
   hitGamePlay2_2= collideRectRect(x4,y4,size/2,size/2,x1,y1,size,size);
   hitGamePlay2_3= collideRectRect(x5,y5,size/2,size/2,x1,y1,size,size);
   hitGamePlay2_4= collideRectRect(x3,y3,size/2,size/2,x2,y2,size,size);
   hitGamePlay2_5= collideRectRect(x4,y4,size/2,size/2,x2,y2,size,size);
   hitGamePlay2_6= collideRectRect(x5,y5,size/2,size/2,x2,y2,size,size);
  }
  //Start screen  
  if (gamePlay==false) {
    background(0);  //background
    fill(255);
    //Game title
    textFont('Banshee');
    textSize(200);
    text('Log Fire',50,height/3.6);
    textSize(35);
   //Player presses enter to begin game
    text('Press Enter to Start Game on Easy',160,height/2.4);
    text('Press BackSpace to Start Game on Hard',130,height/2);
    //show controls and who player 1 is
    textSize(50);
    fill(255,0,0);
    text('Player 1', 50, 400);
    rect(110,430,25,25);
    textSize(20);
    text('Use WASD to move',50,500);
    textSize(50);
    fill(0,0,255);
    //show controls and who player 2 is
    text('Player 2', 575,400);
    textSize(20);
    rect(640,425,25,25);
    text('Use IJKL to move',575,500);
    fill(255);
    textSize(50);
    rect(x3-60,y3+150,100,100);
    text('Do Not Touch',250,350);
    text('Block',325,400);
  }
  //Start game on Easy mode
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
    //Make Enemy Projectiles reflect off Borders
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
  //Start game on hard mode
  if (gamePlay2===true){
    background(0);

    //player 1 rectangle
    fill(255,0,0);
    rect(x1,y1,size,size);
    fill(0,0,255);
    //player 2 rectangle
    rect(x2,y2,size,size);
    fill(255);
    //3 enemy rectangle
    rect(x3,y3,size/2,size/2);
    rect(x4,y4,size/2,size/2);
    rect(x5,y5,size/2,size/2);
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
    //Make enemies bounce off walls
    x3+=projectileX;
    y3+=projectileY;
    if(y3+12.5>=height || y3<=0){
      projectileY= projectileY*(-1);
    }
    if(x3+12.5>=width || x3<=0){
      projectileX=projectileX*(-1);
    }
    x4+=projectileX2;
    y4+=projectileY2;
    if(y4>=height || y4<=0){
      projectileY2= projectileY2*(-1);
    }
    if(x4>=width || x4<=0){
      projectileX2=projectileX2*(-1);
    }
    x5+=projectileX3;
    y5+=projectileY3;
    if(y5>=height || y5<=0){
      projectileY3= projectileY3*(-1);
    }
    if(x5>=width || x5<=0){
      projectileX3=projectileX3*(-1);
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
  //player 2 controls
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
  //If a player is hit the game ends
  if (hit===true || hitGamePlay2_1===true || hitGamePlay2_2===true || hitGamePlay2_3=== true){
    background(0);
    textFont('Banshee');
    fill(0,0,255);
    textSize(100);
    text('Player 2 Wins',120,300);
    textSize(35);
    fill(255);
    text('Press "R" to Restart and Play Again',145,400);
    noLoop();
    //Prevent the game from continuing without pressing the 'R' key  to restart
  }
  if (hit2===true || hitGamePlay2_4===true || hitGamePlay2_5===true || hitGamePlay2_6=== true){
     noLoop();
     background(0);
     textFont('Banshee');
     fill(255,0,0);
     textSize(100);
     text('Player 1 Wins',120,300);
     textSize(35);
     fill(255);
     txt('Press "R" to Restart and Play Again',145,400);
     noLoop();
     //Prevent the game from continuing without pressing the 'R' key  to restart
  }
}
function keyPressed(){
  //detect whether to start the game
  if (keyCode === 13){
    //clear the canvas and have players appear
    gamePlay = true;
    }
  if (keyCode === 8){
    gamePlay2 = true;
    }
  }
function keyTyped(){
  if (keyIsDown(82)|| keyIsDown(82)){
  //reset the game to be played again
  clear();
  //Return variables to original value to prevent the game starting with a collision
  x1=0;
  y1=300;
  x2=700;
  y2=300;
  x3=400;
  y3=300;
  x4=500;
  y4=400;
  x5=300;
  y5=200;
  projectileX=4;
  projectileY=4;
  projectileX2=5;
  projectileY2=5;
  projectileX3=6;
  projectileY3=6;
  hit=false;
  hit2=false;
  hitGamePlay2_1=false;
  hitGamePlay2_2=false;
  hitGamePlay2_3=false;
  hitGamePlay2_4=false;
  hitGamePlay2_5=false;
  hitGamePlay2_6=false;
  gamePlay=false;
  gamePlay2=false;
  loop();
  }
}
