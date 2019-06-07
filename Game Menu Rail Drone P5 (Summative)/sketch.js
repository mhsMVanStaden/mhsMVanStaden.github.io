//Sprites variables
let SmaeX=587.5;
let SmaeY=50;
let Smae=true;
//Setup menu variables
let MenuX=637.5;
let MenuY=450;
let MenuBorderTopX=0;
let MenuBorderTopY=-700;
let MenuBorderTopHit=false;
let MenuBorderBottomHit=false;
let Game_Menu=true; //where player selects
var TitleFont, fontReady = false;
function fontRead(){
  fontReady = true;
}
function preload() {
  TitleFont = loadFont('D:\Michael van Staden - ICS20.-02\Xampp\htdocs\p5\Game Menu Rail Drone P5 (Summative)\Blanka-Regular.ttf', fontRead );
}

function setup() {
  // put setup code here
  createCanvas(1275, 900);
  textFont('TitleFont');
  textSize(36);
  text('Rail Drone', 10, 50);
}

function draw(){
  background(0);
  text('Bonjour', 400, 400);
  if (Game_Menu==true){
    translate(0,-SmaeY+450);
    //MenuBorderTopHit=collideRectRect()
    fill(255);
    rect(MenuBorderTopX,MenuBorderTopY,1275,550);
    MenuText(MenuBorderTopX,MenuBorderTopY);
    MenuBorderTopHit=collideRectRect(MenuBorderTopX,MenuBorderTopY,1275,550,SmaeX,SmaeY,50,100);
    if (MenuBorderTopHit==true){
      SmaeY+=2;
    }
  }
  drawSmae(SmaeX,SmaeY);
  if (keyIsDown(87)){
  }
  else {
    //SmaeY+=2;
  }
    if (keyIsDown(87)){
      SmaeY-=2;
    }
      if (keyIsDown(65)){
      //move Smae Left
      SmaeX-=2;
      }
      if (keyIsDown(68)){
        //move Smae right
        SmaeX+=2;
      }
      if (keyIsDown(83)){
        SmaeY+=2;
      }
}
function drawSmae(SmaeX,SmaeY){
  fill(237,155,45);
  rect(SmaeX,SmaeY,50,100);
}
function MenuText(MeneX,MenuY){
  fill(0,0,255);
  textSize(100);
  text('        『R』『a』『i』『l』\n    『D』『r』『o』『n』『e』',-130,-300);
  textSize(25);
  }
  /*
  Get a .ttf or .otf font file. This font file will be loaded on execution time to your app.
Declare a global variable to keep the font.
Load the font with loadFont in a preload function.
After the font is loaded you must use textFont() to tell p5 that this is the font to be used.
Print someting with text().
*/
