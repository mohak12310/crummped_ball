var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = createSprite(300,680,990,25);
     paper = createSprite(100,650,20,20);
         wall1 = createSprite(770,590,20,150);
		     wall2 = createSprite(610,655,300,20);
		         wall3 = createSprite(470,590,20,150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

 ground.shapeColor=("white");
      paper.shapeColor=("green");
          wall1.shapeColor=("red");
		      wall2.shapeColor=("red")
		          wall3.shapeColor=("red");
			      
  drawSprites();
 
}

function keypressed (){
	if (keycode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body.position,{x:85,y:85})
	}

}



