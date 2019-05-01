function setup() {
  // put setup code here
  createCanvas(1000,600);
}

function draw() {
  background(0);
  fill(255);
  textFont('Banshee');
  textSize(50);
  text('Click the Mouse to Clone the Circle', 130,100);
  //create a colour border with rectangles
  fill(255,0,0)
  let x1=0;
  while (x1<=1000 ){
  rect(x1,10,10,10);
  x1+=10;
  }
  fill(0,255,0);
  let x2=0;
  while (x2<=1000 ){
  rect(x2,580,10,10);
  x2+=10;
  }
  fill(255,255,0);
  let y1=0;
  while (y1<=600 ){
  rect(10,y1,10,10);
  y1+=10;
  }
  fill(0,0,255);
  let y2=0;
  while (y2<=600 ){
  rect(980,y2,10,10);
  y2+=10;
  }
  //if the mouse clicked draw circles from top left to bottom right
  if (mouseIsPressed){
    fill(255);
    y = 20;
    f = 20;
    f2=980;
    y2=20;
    for (let i = 0; i < 29; i++) {
    ellipse(f, y, 25,25);
    y += 20;
    f+=20;
    ellipse(f2,y2,25,25);
    y2+=20;
    f2-=20
    }
  }
}
