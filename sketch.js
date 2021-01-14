function setup() {
  createCanvas(800,480);
  
  ground=createSprite(600,400,1200,20)
  //Create the Bodies here
  plinko=new Plinko(200,450,40)
}

function draw() {
  background("black");  
  drawSprites();
}
