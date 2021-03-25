
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var  bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var roof1,rope1,rope2,rope3,rope4,rope5;



function setup()
{
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof1 = new Roof(400,170,500,20)
	bobObject1 = new Bob(580,200,30);
	 bobObject2 = new Bob(460,200,30)
   bobObject3 = new Bob(420,200,30)
	   bobObject4 = new Bob(380,200,30)
	   bobObject5= new Bob(450,200,30)

rope1 = new Rope(bobObject1.body,roof1.body,-90,0)
rope2 = new Rope(bobObject2.body,roof1.body,-110,0)
rope3 = new Rope(bobObject3.body,roof1.body,-150,0)
rope4 = new Rope(bobObject4.body,roof1.body,-190,0)
rope5 = new Rope(bobObject5.body,roof1.body,-230,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
   bobObject5.display();
roof1.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();





}

function keyPressed(){

if(keyCode=== UP_ARROW){

Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50 , y:-45})


}




}

