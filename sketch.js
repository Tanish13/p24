
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var circle1,stone1,hammer1;
var engine,world;

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stone1 = new stone(100,300,50,50);
    circle1 = new circle(600,620,40);
    ground = new Ground(600,height,900,20);
 hammer1 = new hammer (100,360,50,PI/2);




	Engine.run(engine);
  
}


function draw() {
  
  background(0);
 Engine.update(engine); 
  circle1.display();
hammer1.display();
circle1.display();
ground.display();

 
}



