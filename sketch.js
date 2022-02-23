//renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground;

var balls=[]

function preload() {
 bgimg = loadImage( "assets/background.gif")
 towerimg = loadImage( "assets/tower.png")

}
function setup() {

  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options = {isStatic:true}
  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
  //PI = 180
  cannon=new Cannon(180,110,130,100,-PI/4)
  
}
function draw() {
  background(bgimg);
 
  Engine.update(engine);
  push()
  imageMode(CENTER)
   image(towerimg,tower.position.x,tower.position.y,160,310)
   pop()
  cannon.display()
  for(var i = 0;i< balls.length;i++ ){
    balls[i].display()
  }
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    cannonBall= new Cannonball(cannon.x-10,cannon.y)
    balls.push (cannonBall)
    for(var i = 0;i< balls.length;i++ ){
      balls[i].path = []
    }
  }
}

function keyReleased (){
  if(keyCode==DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}