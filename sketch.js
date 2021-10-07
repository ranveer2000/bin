
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var img;
var bin;
var invisible,invisible1;
function preload(){
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballOptions = {
		restitution:0.0
	}
	var groundOptions={
		isStatic: true
	}
ball=Bodies.circle(100,100,20,ballOptions);
World.add(world,ball)
	Engine.run(engine);
  
	ground=Bodies.rectangle(400,400,800,30,groundOptions);
	World.add(world,ground);

	img=createImg("paper.png");
	img.position(ball.position.x,ball.position.y);
	img.size(30,30);

	bin=createImg("bin.png");
	bin.position(600,255);
	bin.size(100,150);

	invisible=Bodies.rectangle(600,350,10,180,groundOptions);
	World.add(world,invisible);

	invisible1=Bodies.rectangle(700,350,10,180,groundOptions);
	World.add(world,invisible1);
}


function draw() {
  rectMode(CENTER);
  background(0);

if(keyWentUp("SPACE")){
	jump();
}

fill("yellow");
  rect(400,390.5,800,20);

  img.position(ball.position.x-10,ball.position.y-10);

fill("white")
	textSize(20)
  text("let the ball rest on the ground then pressand release the space button to put it in the bin.",10,100);
 
}

function jump(){
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:0.052,y:-0.055})	
}

