var fixedRect,movingRect;
var car,wall;

function setup() {
  createCanvas(1000,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600,400,60,70);

  car = createSprite(200,200,30,30)
  car.shapeColor = "yellow";
  car.velocityX = 3;

  wall = createSprite(700,200,30,80);
  wall.shapeColor = "white";


}

function draw() {
  background(0);

  console.log(movingRect.x-fixedRect.x);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 
  if(isTouching(movingRect,wall))
  {
    text("It is touching",300,400);
  }
  
  collide(car,wall);
 


  drawSprites();
}

