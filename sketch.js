const Bodies = Matter.Bodies;

var Matter;
function setup() {
  createCanvas(400,400);

 box1= new box(200, 100, 50, 50);
 box2= new box(250, 100, 50, 50);
 box3= new box(300, 100, 50, 50);
 box4= new box(150, 100, 50, 50);
 box5= new box(100, 100, 50, 50);

}

function draw() {
  background(255);  
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  drawSprites();
}