
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


	
ground=Bodies.rectangle(width/2,400,width,10,
{
isStatic:true
});
World.add(world,ground)

	//Create the Bodies Here.



dustbinPosition=width/2-100
dustbinY=610;

dustbinLeftSprite=createSprite(dustbinPosition,dustbinY,20,100);
dustbinLeftSprite.shapeColor=color(255,0,0);
dustbinLeftBody=Bodies.rectangle(dustbinPosition+20,dustbinY,20,100,{isStatic:true});
World.add(world,dustbinLeftBody);

dustbinBase=createSprite (dustbinPosition+100,dustbinY+40,200,20)
dustbinBase.shapeColor=color(255,0,0);

dustbinBottomBody=Bodies.rectangle (dustbinPosition+100,dustbinY+45-20,200,20,{isStatic:true});
World.add(world,dustbinBottomBody)

dustbinLeftSprite=createSprite(dustbinPosition+200,dustbinY,20,100);
dustbinLeftSprite.shapeColor=color(255,0,0)

dustbinRightBody = Bodies.rectangle(dustbinPosition+200+20,dustbinY,20,100,{isStatic:true});
World.add(world,dustbinRightBody);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position, {
		x:85,
		y:-85
	});
	}
}
  
  
  
  drawSprites();

}



