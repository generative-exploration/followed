let img;
  let savedMouse;
  let auswahlX = 250;
  let auswahlY = 180;


function preload(){ 
  img = loadImage("0095.jpg");
  myFont = loadFont('FiraCode-Regular.ttf');
}

function setup() {
  let c =  createCanvas(960, 1200);
  image(img, 0, 0);
  textFont(myFont);
  textSize(14);
//  frameRate(10);
  savedMouse = createVector(0, 0);
}

function draw() {
  copy(img, 0, height-20, width, height, 0, height-20, width, height);  
   
  copy(img, auswahlX, auswahlY, 150, 150, mouseX, mouseY, 150, 150);
   
  fill(255);
  textAlign(CENTER);
  text("bodypart: "+ key , width/2, height-5);
}

function mousePressed() {
    savedMouse.x = mouseX;
    savedMouse.y = mouseY;
  }

function keyPressed() { 
   if (key === 's') {
      saveCanvas(c, 'gen_exploration', 'jpg');
  }
  
  if (key == 'r') {
    image (img, 0, 0);
  }

     if (key == "1") {
      auswahlX = 250;
      auswahlY = 180;
    }
    if (key == "2") {
      auswahlX = 300;
      auswahlY = 300;
    }
    if (key == "3") {
      auswahlX = 325;
      auswahlY = 540;
    }
    if (key == "4") {
      auswahlX = 290;
      auswahlY = 700;
    }
  }
