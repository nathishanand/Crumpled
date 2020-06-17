const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,ball1,ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	box1=new Box(520,620,20,100);
	 box2=new Box(630,660,200,20);
	 box3=new Box(740,620,20,100);
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	ground = new Ground(width/2,670,width,10);
	ball1=new Ball(200,450,20);

	//Create a Ground
	//ground = Bodies.rectangle(h/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  ground.display()
  ball1.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-50});

	}
}



