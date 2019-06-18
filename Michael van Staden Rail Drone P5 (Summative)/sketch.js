//Function variables
let SmaeX=200;
let SmaeY=50;
let LaserDrillX=0;
let LaserDrillY=0;
let LaserDrillSpeed=5;
let EnemyX=0;
let EnemyY=0;
let EnemySpeed=1;
let StartPlatformX=0;
let StartPlatformY=0;
let PlatformX=0;
let PlatformY=25;
let MenuX=0;
let MenuY=0;
let JetfuelLevel=100;
let FuelX=0;
let FuelY=0;
let HiveX=0;
let HiveY=0;
let DeathScreenX=0;
let DeathScreenY=0;
//Borders to show where the Player can and cannot go
let TopBorderX=0;
let TopBorderY=0;
let BottomBorderX=0;
let BottomBorderY=1275; //Ensure that levels will be at least 30 seconds long
let LaserDoorX=500;
let LaserDoorY=1275;
//Level Booleans
let Level_0=true; //Menu
let Level_1=false; //Tutorial
let Level_2=false; //Drills and Enemies
let Level_3=false; //Final Boss
//Collision boolean to prevent always colliding
let TopBorderHit=false;
let BottomBorderHit=false;
let PlatformHit1=false;
let PlatformHit2=false;
let PlatformHit3=false;
let PlatformHit4=false;
let PlatformHit5=false;
let PlatformHit6=false;
let PlatformHit7=false;
let PlatformHit8=false;
let PlatformHit9=false;
let PlatformHit10=false;
let PlatformHit11=false;
let PlatformHit12=false;
let PlatformHit13=false;
let PlatformHit14=false;
let PlatformHit15=false;
let EntryLaserDoorHit=false;
let LaserDoorTopHit=false;
let LaserDoorCollide=false;
let EnemyHit1=false;
let EnemyHit2=false;
let EnemyHit3=false;
let EnemyHit4=false;
let EnemyHit5=false;
let StartPlatformHit=false;
let LaserDrillHit1=false;
let LaserDrillHit2=false;
let LaserDrillHit3=false;
let LaserDrillHit4=false;
let LaserDrillHit5=false;
let LaserDrillHit6=false;
let LaserDrillHit7=false;
let LaserDrillHit8=false;
let LaserDrillHit9=false;
let LaserDrillHit10=false;
let LaserDrillHit12=false;
let HiveMindHit=false;
let EntranceHive1=false;
let EntranceHive2=false;
let EntranceHive3=false;
let DeathPlatformcollide=false;
let SmaeHitButton=false;
//Timer variables
let PlatformDeathTimer=0;
let LaserDrillTimer=0;
function preload(){
  DeathScreen=loadImage('DeathScreen.png');
  Enemy=loadImage('EnemyRight.png');
  HiveMind=loadImage('HiveMind.png');
  MiniHiveMind=loadImage('MiniHiveMind.png');
  LaserDrillRight=loadImage('LaserDrillRight.png');
  LaserDrillLeft=loadImage('LaserDrillLeft.png');
  MiniLaserDrillRight=loadImage('MiniLaserDrillRight.png');
  MiniLaserDrillLeft=loadImage('MiniLaserDrillLeft.png');
  SmaeLeft=loadImage('SmaeLeft.png');
  SmaeRight=loadImage('SmaeRight.png');
  DisplayDrill=loadImage('DisplayDrill.png');
}
function setup() {
  // put setup code here
  createCanvas(1275, 900);
}
function draw(){
  background(0);
  if (Level_0==true||keyCode==ESCAPE){
    Menu(0,0);
    //Start level 1 by pressing spacebar
    if (keyIsDown(32)){
      clear();
      Level_0=false;
      Level_1=true;
    }
    //Display a textbox explaining the game
    if (keyCode==ENTER){
      Instructions(0,0);
    }
  }
  //Tutorial level
  if (Level_1==true){
    BasicStart(0,0);
    //First set of platforms
    Platform(300,200); //platform 1
    Platform(700,200); //platform 2
    Platform(1100,200); //platform 3
    //Second set of platforms
    Platform(100,400); //platform 4
    Platform(500,400); //platform 5
    Platform(900,400); //platform 6
    //Place enemies on second level platforms
    drawEnemy(EnemyX+100,350);
    drawEnemy(EnemyX+500,350);
    drawEnemy(EnemyX+900,350);
    //Third set of platforms
    Platform(300,600); //platform 7
    Platform(700,600); //platform 8
    Platform(1100,600); //platform 9
    //Fourth set of platforms
    Platform(100,800); //platform 10
    Platform(500,800); //platform 11
    Platform(900,800); //platform 12
    //LaserDrill to seperate platform set 4 and 5
    drawMiniLaserDrillLeft(LaserDrillX+200,675);
    //Fifth set of platforms
    Platform(300,1000); //platform 13
    Platform(700,1000); //platform 14
    Platform(1100,1000); //platform 15
    //LaserDrill blocking exit
    drawMiniLaserDrillRight(LaserDrillX-900,1175,1275,50);
    //Have fuel level be visible at all times
    DisplayFuel(SmaeX,SmaeY);
    //All collisions to prevent character from falling through solid objects
    PlatformHit1=collideRectRect(300,200,200,5,SmaeX,SmaeY,50,100);
    PlatformHit2=collideRectRect(700,200,200,5,SmaeX,SmaeY,50,100);
    PlatformHit3=collideRectRect(1100,200,200,5,SmaeX,SmaeY,50,100);
    PlatformHit4=collideRectRect(100,400,200,5,SmaeX,SmaeY,50,100);
    PlatformHit5=collideRectRect(500,400,200,5,SmaeX,SmaeY,50,100);
    PlatformHit6=collideRectRect(900,400,200,5,SmaeX,SmaeY,50,100);
    PlatformHit7=collideRectRect(300,600,200,5,SmaeX,SmaeY,50,100);
    PlatformHit8=collideRectRect(700,600,200,5,SmaeX,SmaeY,50,100);
    PlatformHit9=collideRectRect(1100,600,200,5,SmaeX,SmaeY,50,100);
    PlatformHit10=collideRectRect(100,800,200,5,SmaeX,SmaeY,50,100);
    PlatformHit11=collideRectRect(500,800,200,5,SmaeX,SmaeY,50,100);
    PlatformHit12=collideRectRect(900,800,200,5,SmaeX,SmaeY,50,100);
    PlatformHit13=collideRectRect(300,1000,200,5,SmaeX,SmaeY,50,100);
    PlatformHit14=collideRectRect(700,1000,200,5,SmaeX,SmaeY,50,100);
    PlatformHit15=collideRectRect(1100,1000,200,5,SmaeX,SmaeY,50,100);
    //Detection if character should see deathscreen
    EnemyHit1=collideRectRect(EnemyX+100,350,50,50,SmaeX,SmaeY,50,100);
    EnemyHit2=collideRectRect(EnemyX+500,350,50,50,SmaeX,SmaeY,50,100);
    EnemyHit3=collideRectRect(EnemyX+900,350,50,50,SmaeX,SmaeY,50,100);
    LaserDrillHit1=collideRectRect(LaserDrillX-900,1175,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit2=collideRectRect(LaserDrillX+200,675,1275,50,SmaeX,SmaeY,50,100);
    if (LaserDoorCollide==true){
      clear();
      Level_1=false;
      //fully fuel
      JetfuelLevel=100;
      //Reset character to top screen
      SmaeX=200;
      SmaeY-=1100;
      Level_2=true;
      //reset variables to be used again
    }
    //Keep player on platform. Staying on platforms too long (3 seconds) results in character death. Refuel jet boosters.
    if (PlatformHit1==true||PlatformHit2==true||PlatformHit3==true||PlatformHit4==true||PlatformHit5==true||PlatformHit6==true||PlatformHit7==true||PlatformHit7==true||PlatformHit8==true||PlatformHit9==true||PlatformHit10==true||PlatformHit11==true||PlatformHit12==true||PlatformHit13==true||PlatformHit14==true||PlatformHit15==true){
      SmaeY-=2;
      PlatformDeathTimer+=1;
      if (JetfuelLevel<=100){
        JetfuelLevel+=1;
      }
    }
    //Reset platformtimer when off a platform
    else {
      PlatformDeathTimer=0;
    }
    //Cause deathscreen 1.
    if (PlatformDeathTimer>=180||EnemyHit1==true||EnemyHit2==true||LaserDrillHit1==true||LaserDrillHit2==true){
      Deathscreen1(0,SmaeY);
    }
  }
  //Drills and Enemies
  if (Level_2==true){
    BasicStart(0,0);
    Platform(400,200);
    Platform(400,700);
    Platform(800,700);
    drawLaserDrillLeft(LaserDrillX+800,300);
    drawLaserDrillRight(LaserDrillX-1000,300);
    drawLaserDrillLeft(LaserDrillX+500,800);
    drawLaserDrillRight(LaserDrillX-1275,800);
    drawEnemy(EnemyX+400,EnemyY+650);
    drawEnemy(EnemyX+800,EnemyY+650);
    //Have fuel level be visible at all times
    DisplayFuel(SmaeX,SmaeY);
    LaserDrillHit1=collideRectRect(LaserDrillX+800,300,1275,150,SmaeX,SmaeY,50,100);
    LaserDrillHit2=collideRectRect(LaserDrillX-1000,300,1275,150,SmaeX,SmaeY,50,100);
    LaserDrillHit3=collideRectRect(LaserDrillX+500,800,1275,150,SmaeX,SmaeY,50,100);
    LaserDrillHit4=collideRectRect(LaserDrillX-1275,800,1275,150,SmaeX,SmaeY,50,100);
    PlatformHit1=collideRectRect(400,200,200,5,SmaeX,SmaeY,50,100);
    PlatformHit2=collideRectRect(400,700,200,5,SmaeX,SmaeY,50,100);
    PlatformHit3=collideRectRect(800,700,200,5,SmaeX,SmaeY,50,100);
    EnemyHit1=collideRectRect(EnemyX+400,EnemyY+650,50,50,SmaeX,SmaeY,50,100);
    EnemyHit2=collideRectRect(EnemyX+800,EnemyY+650,50,50,SmaeX,SmaeY,50,100);
    if (LaserDoorCollide==true){
      clear();
      Level_2=false;
      //fully fuel
      JetfuelLevel=100;
      //Reset character to top screen
      SmaeX=200;
      SmaeY-=1000;
      Level_3=true;
      //reset variables to be used again
    }
    //Keep player on platform. Staying on platforms too long (3 seconds) results in character death. Refuel jet boosters.
    if (PlatformHit1==true||PlatformHit2==true||PlatformHit3==true){
      SmaeY-=2;
      PlatformDeathTimer+=1;
      if (JetfuelLevel<=100){
        JetfuelLevel+=1;
      }
    }
    //Reset platformtimer when off a platform
    else {
      PlatformDeathTimer=0;
    }
    //Cause deathscreen 2.
    if (PlatformDeathTimer>=180||EnemyHit1==true||EnemyHit2==true||LaserDrillHit1==true||LaserDrillHit2==true||LaserDrillHit3==true||LaserDrillHit4==true){
      Deathscreen2(0,SmaeY);
    }
  }
  //Hive mind Level
  if (Level_3==true){
    //different basic start
    SpecialStart(0,0);
    //show the button to stop the hive mind
    Button(900,900);
    //button behind player to allow use of get function
    drawSmae(SmaeX,SmaeY);
    Platform(537.5,200);
    Platform(137.5,650);
    Platform(937.5,650);
    //Left side laser drills
    drawMiniLaserDrillRight(LaserDrillX-1250,250);
    drawMiniLaserDrillRight(LaserDrillX-1450,350);
    drawMiniLaserDrillRight(LaserDrillX-1650,450);
    drawMiniLaserDrillRight(LaserDrillX-1650,750);
    drawMiniLaserDrillRight(LaserDrillX-1450,850);
    drawMiniLaserDrillRight(LaserDrillX-1450,950);
    //right side laser drills
    drawMiniLaserDrillLeft(LaserDrillX+550,250);
    drawMiniLaserDrillLeft(LaserDrillX+750,350);
    drawMiniLaserDrillLeft(LaserDrillX+950,450);
    drawMiniLaserDrillLeft(LaserDrillX+950,750);
    drawMiniLaserDrillLeft(LaserDrillX+750,850);
    drawMiniLaserDrillLeft(LaserDrillX+750,950);
    //enemies on platforms and on the ground
    drawEnemy(EnemyX+537.5,EnemyY+150);
    drawEnemy(EnemyX+137.5,EnemyY+600);
    drawEnemy(EnemyX+937.5,EnemyY+600);
    drawEnemy(EnemyX+837.5,EnemyY+1225);
    drawEnemy(EnemyX+237.5,EnemyY+1225);
    //entrance to hive mind self destruct
    fill(0,0,255);
    //left entry
    rect(387,900,50,250);
    //right entry
    rect(837,900,50,250);
    //top border entry
    rect(387,900,500,100);
    //show the hive mind
    drawHiveMind(387.5,400);
    //Have fuel level be visible at all times
    DisplayFuel(SmaeX,SmaeY);
    LaserDrillHit1=collideRectRect(LaserDrillX-1250,250,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit2=collideRectRect(LaserDrillX-1450,350,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit3=collideRectRect(LaserDrillX-1650,450,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit4=collideRectRect(LaserDrillX-1650,750,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit5=collideRectRect(LaserDrillX-1450,850,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit6=collideRectRect(LaserDrillX-1450,950,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit7=collideRectRect(LaserDrillX+550,250,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit8=collideRectRect(LaserDrillX+750,350,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit9=collideRectRect(LaserDrillX+950,450,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit10=collideRectRect(LaserDrillX+950,750,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit11=collideRectRect(LaserDrillX+750,850,1275,50,SmaeX,SmaeY,50,100);
    LaserDrillHit12=collideRectRect(LaserDrillX+750,950,1275,50,SmaeX,SmaeY,50,100);
    PlatformHit1=collideRectRect(537.5,200,200,5,SmaeX,SmaeY,50,100);
    PlatformHit2=collideRectRect(137.5,650,200,5,SmaeX,SmaeY,50,100);
    PlatformHit3=collideRectRect(937.5,650,200,5,SmaeX,SmaeY,50,100);
    EnemyHit1=collideRectRect(EnemyX+537.5,EnemyY+150,50,50,SmaeX,SmaeY,50,100);
    EnemyHit2=collideRectRect(EnemyX+137.5,EnemyY+600,50,50,SmaeX,SmaeY,50,100);
    EnemyHit3=collideRectRect(EnemyX+937.5,EnemyY+600,50,50,SmaeX,SmaeY,50,100);
    EnemyHit4=collideRectRect(EnemyX+837.5,EnemyY+1225,50,50,SmaeX,SmaeY,50,100);
    EnemyHit5=collideRectRect(EnemyX+237.5,EnemyY+1225,50,50,SmaeX,SmaeY,50,100);
    HiveMindHit=collideRectRect(387.5,400,500,500,SmaeX,SmaeY,50,100);
    SmaeHitButton=collideRectRect(562.5,1025,150,150,SmaeX,SmaeY,50,100);
    EntranceHive1=collideRectRect(387,900,50,250,SmaeX,SmaeY,50,100);
    EntranceHive2=collideRectRect(837,900,50,250,SmaeX,SmaeY,50,100);
    EntranceHive3=collideRectRect(387,900,500,100,SmaeX,SmaeY,50,100);
    //prevent players from walking through entrance blocks
    if (EntranceHive1==true){
      SmaeX-=2;
    }
    if (EntranceHive2==true){
      SmaeX+=2;
    }
    if (EntranceHive3==true){
      SmaeY+=2;
    }
    //Keep player on platform. Staying on platforms too long (3 seconds) results in character death. Refuel jet boosters.
    if (PlatformHit1==true||PlatformHit2==true||PlatformHit3==true){
      SmaeY-=2;
      PlatformDeathTimer+=1;
      if (JetfuelLevel<=100){
        JetfuelLevel+=1;
      }
    }
    //Reset platformtimer when off a platform
    else {
      PlatformDeathTimer=0;
    }
    //Cause deathscreen 3.
    if (PlatformDeathTimer>=180||HiveMindHit==true||EnemyHit1==true||EnemyHit2==true||EnemyHit3==true||EnemyHit4==true||EnemyHit5==true||LaserDrillHit1==true||LaserDrillHit2==true||LaserDrillHit3==true||LaserDrillHit4==true||LaserDrillHit5==true||LaserDrillHit6==true||LaserDrillHit7==true||LaserDrillHit8==true||LaserDrillHit9==true||LaserDrillHit10==true||LaserDrillHit11==true||LaserDrillHit12==true){
      Deathscreen3(0,SmaeY);
    }
    if (SmaeHitButton==true){
      VictoryScreen(0,SmaeY);
    }
  }
}
//reduce repeated code for start of each level
function BasicStart(FuelX,FuelY){
  //Move Canvas with player
  translate(0,-SmaeY+225);
  //player
  drawSmae(SmaeX,SmaeY);
  //character startpoint
  EntryLaserDoor(0,0);
  StartPlatform(0,0);
  //Where the endgoal is
  LaserDoor(1275,1125);
  TopBorder(0,0);
  BottomBorder(BottomBorderX,BottomBorderY);
  //Left Border of the screen
  if (SmaeX<=0){
    SmaeX+=2;
  }
  //right border of the screen
  if (SmaeX>=1225){
    SmaeX-=2;
  }
  StartPlatformHit=collideRectRect(0,150,250,50,SmaeX,SmaeY,50,100);
  TopBorderHit=collideRectRect(TopBorderX,TopBorderY-1000,1300,900,SmaeX,SmaeY,50,100);
  BottomBorderHit=collideRectRect(BottomBorderX,BottomBorderY,1300,1000,SmaeX,SmaeY,50,100);
  //Prevent player going the way the came
  EntryLaserDoorHit=collideRectRect(75,0,25,150,SmaeX,SmaeY,50,100);
  //Prevent Player from going through door
  LaserDoorTopHit=collideRectRect(1175,1127,150,4,SmaeX,SmaeY,50,100);
  //Allow player to go to next level
  LaserDoorCollide=collideRectRect(1175,1125,25,160,SmaeX,SmaeY,50,100);
  if (EntryLaserDoorHit==true){
    SmaeX+=2;
  }
  if (LaserDoorTopHit==true){
    SmaeY-=2;
  }
  //Keep player on start platform (set value to make smoother)
  if (StartPlatformHit==true){
    SmaeY=50;
  }
  //Reset Player movement to the beginning when pressing reset button
  if (TopBorderHit==true){
    SmaeY=0;
  }
  //Keep player on BottomBorder (set value to make smoother)
  if (BottomBorderHit==true){
    SmaeY=1175;
  }
  //Slowly pull character downwards at a constant
  else{
    SmaeY+=2;
  }
  //Move laserdrills back and forth
  LaserDrillX+=LaserDrillSpeed;
  if (LaserDrillX+500>=1275 || LaserDrillX<=0){
    LaserDrillSpeed=LaserDrillSpeed*(-1);
  }
  //move enemies move back and forth
  EnemyX+=EnemySpeed;
  if (EnemyX+50>=200 || EnemyX<=0){
    EnemySpeed=EnemySpeed*(-1);
  }
  //Allow jets to be used if jetfuel is available
  if (JetfuelLevel>=0){
    //booster jets push you into the air at the cost of using fuel
    if (keyIsDown(32)){
      JetfuelLevel-=1;
      SmaeY-=5;
    }
  }
  //move Smae Left
  if (keyIsDown(65)){
    SmaeX-=2;
    image(SmaeLeft,SmaeX,SmaeY,50,100);
  }
  //move Smae right
  if (keyIsDown(68)){
    SmaeX+=2;
    image(SmaeRight,SmaeX,SmaeY,50,100);
  }
}
//special conditions for level 3 use different starts
function SpecialStart(FuelX,FuelY){
  //Move Canvas with player
  translate(0,-SmaeY+225);
  //character startpoint
  EntryLaserDoor(0,0);
  StartPlatform(0,0);
  TopBorder(0,0);
  BottomBorder(BottomBorderX,BottomBorderY);
  //Left Border of the screen
  if (SmaeX<=0){
    SmaeX+=2;
  }
  //right border of the screen
  if (SmaeX>=1225){
    SmaeX-=2;
  }
  StartPlatformHit=collideRectRect(0,150,250,50,SmaeX,SmaeY,50,100);
  TopBorderHit=collideRectRect(TopBorderX,TopBorderY-1000,1300,1000,SmaeX,SmaeY,50,100);
  BottomBorderHit=collideRectRect(BottomBorderX,BottomBorderY,1300,1000,SmaeX,SmaeY,50,100);
  //Prevent player going the way the came
  EntryLaserDoorHit=collideRectRect(75,0,25,150,SmaeX,SmaeY,50,100);
  if (EntryLaserDoorHit==true){
    SmaeX+=2;
  }
  //Keep player on start platform (set value to make smoother)
  if (StartPlatformHit==true){
    SmaeY=50;
  }
  //Reset Player movement to the beginning when pressing reset button
  if (TopBorderHit==true){
    SmaeY=0;
  }
  //Keep player on BottomBorder (set value to make smoother)
  if (BottomBorderHit==true){
    SmaeY=1175;
  }
  //Slowly pull character downwards at a constant
  else{
    SmaeY+=2;
  }
  //Move laserdrills back and forth
  LaserDrillX+=LaserDrillSpeed;
  if (LaserDrillX+500>=1275 || LaserDrillX<=0){
    LaserDrillSpeed=LaserDrillSpeed*(-1);
  }
  //move enemies move back and forth
  EnemyX+=EnemySpeed;
  if (EnemyX+50>=200 || EnemyX<=0){
    EnemySpeed=EnemySpeed*(-1);
  }
  //Allow jets to be used if jetfuel is available
  if (JetfuelLevel>=0){
    //booster jets push you into the air at the cost of using fuel
    if (keyIsDown(32)){
      JetfuelLevel-=1;
      SmaeY-=5;
    }
  }
  //move Smae Left
   if (keyIsDown(65)){
     SmaeX-=2;
     image(SmaeLeft,SmaeX,SmaeY,50,100);
   }
   //move Smae right
   if (keyIsDown(68)){
      SmaeX+=2;
      image(SmaeRight,SmaeX,SmaeY,50,100);
   }
}
//draw player character
function drawSmae(SmaeX,SmaeY){
  fill(237,155,45,255);
  image(SmaeRight,SmaeX,SmaeY,50,100);
}
//show how much fuel the player has
function DisplayFuel(FuelX,FuelY){
  //display jetfuellevel
  fill(255);
  textSize(24);
  text('JetFuel',1060,SmaeY-197,JetfuelLevel,25)
  strokeWeight(4);
  stroke(255,0,0);
  fill(255,255,0);
  rect(1150,SmaeY-200,JetfuelLevel,25);
  //keep original colour, stroke colour, and weight for other functions in draw
  fill(255);
  stroke(0);
  strokeWeight(1);
}
//draw the top border to indicate how high the player can go
function TopBorder(TopBorderX,TopBorderY){
  fill(0,0,255);
  rect(TopBorderX,TopBorderY-1000,1300,1000);
}
//draw the bottom border to show how low the player can go
function BottomBorder(BottomBorderX,BottomBorderY){
  fill(0,0,255);
  rect(BottomBorderX,BottomBorderY,1300,1000);
}
//show the player where they came from
function EntryLaserDoor(LaserDoorX,LaserDoorY){
  //create a rectangle for Smae to collide with (just to visualize collide)
  fill(0);
  rect(LaserDoorX+75,LaserDoorY,25,150);
  //create destroyable barrier
  fill(138,43,226);
  arc(LaserDoorX+75,LaserDoorY+75,50,150,PI/2*(-1),PI/2);
  //tube (Slightly taller to prevent Smae from being pushed off from collide)
  fill(100);
  rect(LaserDoorX-75,LaserDoorY-4,150,160);
  //make it double sided
  fill(0);
  rect(LaserDoorX-100,LaserDoorY,25,150);
  fill(0,0,255);
  arc(LaserDoorX-75,LaserDoorY+75,50,150,PI/2,PI/2*(-1));
}
//show the player where the end goal is
function LaserDoor(LaserDoorX,LaserDoorY){
  //create a rectangle for Smae to collide with (just to visualize collide)
  fill(0);
  rect(LaserDoorX+75,LaserDoorY,25,150);
  //create destroyable barrier
  fill(0,0,255);
  arc(LaserDoorX+75,LaserDoorY+75,50,150,PI/2*(-1),PI/2);
  //tube (Slightly taller to prevent Smae from being pushed off from collide)
  fill(100);
  rect(LaserDoorX-75,LaserDoorY-4,150,160);
  //make it double sided
  fill(0);
  rect(LaserDoorX-100,LaserDoorY,25,150);
  fill(0,0,255);
  arc(LaserDoorX-75,LaserDoorY+75,50,150,PI/2,PI/2*(-1));
  fill(0);
}
//to allow the player to stand
function Platform(PlatformX,PlatformY){
  //Platform for Smae to stand on
  fill(255,0,0);
  rect(PlatformX,PlatformY,200,25);
}
//where the player starts the level
function StartPlatform(StartPlatformX,StartPlatformY){
  //Start Platform
  fill(0,0,255);
  rect(0,150,250,50);
}
//Menu start function
function Menu(MenuX,MenuY){
  //Beginning text
  background(0);
  fill(58,134,183);
  textSize(75);
  text('     『R』 『A』 『I』 『L』\n『D』『R』『O』『N』『E』',90,100);
  textSize(24);
  text('Press SpaceBar to Begin the Adventure',390,250);
  text('Press Enter for Instructions',460,300);
}
//press a button for how to play the game
function Instructions(MenuX,MenuY){
  //create textbox
  fill(0);
  strokeWeight(8);
  stroke(255);
  rect(110,210,1000,650);
  stroke(0);
  strokeWeight(1);
  //Explanation of the game with Sprites to show what is what
  fill(58,134,183);
  text(' You play as Smae. Use AD to move and SpaceBar to use Jet boosters.\n Fuel Displayed top right Corner ',175,250);
  drawSmae(1000,225);
  DisplayFuel(400,225);
  //Did not use function to avoid movement of the Jetfuel bar
  fill(255);
  textSize(24);
  text('JetFuel',600,260,JetfuelLevel,25)
  strokeWeight(4);
  stroke(255,0,0);
  fill(255,255,0);
  rect(700,260,JetfuelLevel,25);
  //keep original colour, stroke colour, and weight for other functions in draw
  fill(255);
  stroke(0);
  strokeWeight(1);
  fill(58,134,183);
  text(' Your goal is to take down the Hive Mind.',175,350);
  //scaled down hive mind to fit in box
  image(MiniHiveMind,700,300,100,100);
  fill(58,134,183);
  text(' Traverse dangerous levels filled with enemies and laserdrills. Avoid Them',175,450);
  //displaydrill
  fill(255,255,0);
  image(DisplayDrill,300,500,800,50);
  //show enemy
  drawEnemy(200,500);
  fill(58,134,183);
  text(' Platforms will hurt you if you stay on them too long.\n You can latch onto Platforms',175,650);
  //show platform
  Platform(890,630);
  fill(58,134,183);
  text(' Find the tunnel to go through to the next level',175,750);
  //show laser door
  LaserDoor(1000,690);
  fill(58,134,183);
  text(' Good luck and Have fun. Press Escape to close',175,850);
}
//Enemy and laserdrill functions
//prevent image and function mixups, draw put in front
function drawEnemy(EnemyX,EnemyY){
  image(Enemy,EnemyX,EnemyY,50,50);
}
//enemy drills going back and forth (small version)
function drawMiniLaserDrillLeft(LaserDrillX,LaserDrillY){
  image(MiniLaserDrillLeft,LaserDrillX,LaserDrillY,1275,50);
}
//enemy drills going back and forth (small version), allow the image to flip and show the tip of drill
function drawMiniLaserDrillRight(LaserDrillX,LaserDrillY){
  image(MiniLaserDrillRight,LaserDrillX,LaserDrillY,1275,50);
}
//enemy drills going back and forth
function drawLaserDrillLeft(LaserDrillX,LaserDrillY){
  image(LaserDrillLeft,LaserDrillX,LaserDrillY,1275,150);
}
//enemy drills going back and forth
function drawLaserDrillRight(LaserDrillX,LaserDrillY){
  image(LaserDrillRight,LaserDrillX,LaserDrillY,1275,150);
}
//Display a deathscreen for level 1 when called
function Deathscreen1(SmaeX,SmaeY){
  background(0);
  image(DeathScreen,0,SmaeY);
  fill(255,0,0);
  textSize(72);
  text('Defeat',515,SmaeY+150)
  textSize(36);
  text('Press Number 1 to Retry',425,SmaeY+300);
  noLoop();
}
//Display a deathscreen for level 2 when called
function Deathscreen2(SmaeX,SmaeY){
  background(0);
  image(DeathScreen,0,SmaeY);
  fill(255,0,0);
  textSize(72);
  text('Defeat',515,SmaeY+150)
  textSize(36);
  text('Press Number 2 to Retry',425,SmaeY+300);
  noLoop();
}
//Display a deathscreen for level 3 when called
function Deathscreen3(SmaeX,SmaeY){
  background(0);
  image(DeathScreen,0,SmaeY);
  fill(255,0,0);
  textSize(72);
  text('Defeat',515,SmaeY+150)
  textSize(36);
  text('Press Number 3 to Retry',425,SmaeY+300);
  noLoop();
}
//Hive Mind Boss
function drawHiveMind(HiveX,HiveY){
  image(HiveMind,HiveX,HiveY,500,500);
}
//Kill button (Press the button to beat the Hive mind)
function Button(HiveX,HiveY){
  fill(255,0,0);
  ellipse(637.5,1100,150,150);
  textSize(24);
  fill(0);
  text('   Self\nDestruct',595,1090);
}
//destroying the hive mind grants an automatic win
function VictoryScreen(TopBorderX,TopBorderY){
  background(0);
  fill(58,134,183);
  textSize(75);
  text('CONGRATULATIONS',250,SmaeY);
  textSize(24);
  text('Thank You for Playing!',500,SmaeY+100);
  text('Press 0 to Begin Again',500,SmaeY+150);
  noLoop();
}
//Reset function to allow a player to restart a level
function keyTyped() {
  //Press 0 to go to menu
  if (keyIsDown(48)) {
    Level_1=false;
    Level_2=false;
    Level_3=false;
    clear();
    //Fuel fully
    JetfuelLevel=100;
    //Sprites variables
    SmaeX=200;
    SmaeY-=1000;
    Level_0=true;
    loop();
  }
  //On level 1 you can reset by pressing 1
  if (Level_1==true){
    if (keyIsDown(49)) {
      clear();
      //Fuel fully
      JetfuelLevel=100;
      SmaeX=200;
      SmaeY-=1000;
      loop();
    }
  }
  //on level 2 you can reset by pressing 2
  if (Level_2==true){
    if (keyIsDown(50)) {
      clear();
      //Fuel fully
      JetfuelLevel=100;
      //Sprites variables
      SmaeX=200;
      SmaeY-=1000;
      loop();
    }
  }
  //on level 3 you can reset by pressing 3
  if (Level_3==true){
    if (keyIsDown(51)) {
      clear();
      //Fuel fully
      JetfuelLevel=100;
      //reset character position
      SmaeX=200;
      SmaeY-=1000;
      loop();
    }
  }
}
