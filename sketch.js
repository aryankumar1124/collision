function setup() {
  createCanvas(800,400);
   box = createSprite(400, 200, 50, 50);
   box2 = createSprite(400,100,60,50);
   box.shapeColor = "red"
   box2.shapeColor = "yellow"
}

function draw() {
  background(255,255,255);  
  box.x = mouseX;
  box.y = mouseY;
  if(box.x-box2.x<box2.width/2+box.width/2
    &&box2.x-box.x<box2.width/2+box.width/2
    &&box.y-box2.y<box2.height/2+box.height/2
    &&box2.y-box.y<box2.height/2+box.height/2){
      box.shapeColor = "black";
      box2.shapeColor = "orange";
    }
  else{
box.shapeColor = "red";
box2.shapeColor = "yellow";
  }
  drawSprites();
}