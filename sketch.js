var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box1, box2, leftBody, rightBody, bottomBody
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	//leftBody = new Box(600,625,20,50);
	//rightBody = new Box(140,100,50,100);
	leftBody = createSprite(325,610,25,100)
	leftBody.shapeColor = "red"
	bottomBody = createSprite(400,655,150,10)
	bottomBody.shapeColor = "red"
	rightBody = createSprite(470,610,25,100)
	rightBody.shapeColor = "red"
	var option1 = {
		isStatic : true
	}
	var option2 = {
		isStatic : true
	}
	var option3 = {
		isStatic : true
	}
	boxLeftbody = Bodies.rectangle(325,610,25,100,option1)
	boxBottombody = Bodies.rectangle(400,635,150,10,option2)
	boxrightbody = Bodies.rectangle(470,610,25,100,option3)
	World.add(world,boxLeftbody)
	World.add(world,boxBottombody)
	World.add(world,boxrightbody)
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y 
  //leftBody.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
//	packageSprite.x=packageBody.position.x
//	packageSprite.y=packageBody.position.y
	Matter.Body.setStatic(packageBody,false)
  }
}



