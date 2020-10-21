
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,Boy;

var gameState="onRope";

function preload()
{
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Boy=createSprite(200,570,10,10);
	Boy.addImage(boy);
	Boy.scale=0.2;

	ground=new Ground(800,690,1600,50);
	
	tree=new Tree(1000,430,550,550);

	stone=new Stone(100,485,50,50);

	mango=new Fruit(1000,300,50,50);

	mango2=new Fruit(1050,200,50,50);

	

	rpe=new Rope(stone.body,{x:100,y:470});

	Engine.run(engine);
  
}


function draw() {
  background(0);
  drawSprites();

  ground.display();
  tree.display();
  stone.display();
  rpe.display();	
  mango.display();
 
 
}

function mouseDragged(){
    if(gameState!=="launch"){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
	rpe.fly();
	gameState="launch";
}




