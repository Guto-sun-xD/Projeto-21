
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftBar;
var rightBar;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
    isStatic: false,
    restituition:0.2,
    friction: 0,
	density:0.2
	}

	ground = new Ground(0,650,800,5)
    leftBar = new Ground(650,580,5,70)
	rightBar = new Ground(780,580,5,70)

    ball = Bodies.circle(50,100,25,ball_options);
    World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x,ball.position.y,25);
  ground.display(); 
  leftBar.display();
  rightBar.display();
  drawSprites();
  
}

function keyPressed(){
 if(keyCode == UP_ARROW){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:10.5,y:-10.5});
 }

}


