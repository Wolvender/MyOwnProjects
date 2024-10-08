let Img_link;

let forward;
let left;
let right;
let backward;

let Link_active = "forward"

let x = 100
let y = 100

function preload() {
  Img_link = loadImage("./Imgs/Sprite_link1.png")
  
}


function setup() {
  createCanvas(1000, 1000);
  background("lightgreen");
  
}


function draw() {
  keyPressed()


}

function keyPressed(forward) {
  background("lightgreen")
  if (Link_active == "forward") {
    if (keyCode == 83) {
      forward = image(Img_link, x, y, 100, 100, 10, 10, 90, 95) //down
      y = y +3;
      if (y == 1000){
        y = 100
      }
  }
  if (Link_active == "backward") {
  }if (keyCode == 87) {
    backward = image(Img_link, x, y, 100, 100, 10, 625, 90, 95)//up
    y = y -3;
    if (y == 1000){
      y = 100
    }
    
  }
  if (Link_active == "right") {
  }if (keyCode == 68) {
    right = image(Img_link, x, y, 100, 100, 10, 320, 90, 95)//Right
    x = x +3;
    if (x == 1000){
      x = 100
    }
  }
  if (Link_active == "left") {
  }if (keyCode == 65) {
    left = image(Img_link, x, y, 100, 100, 10, 112, 90, 95)//Left
    x = x -3;
    if (x == 1000){
      x = 100
    }
  }
  }else {
    background("lightgreen")
    noLoop()
  }


}