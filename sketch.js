
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var snowMan, ground, cloud;
var engine,world;
var snow = [];
var snow2 = [];
var snow3 = [];

function preload(){
  bgSound = loadSound("jb.mp3")
  bg = loadImage("snowbg.png");
}

function setup() {
	createCanvas(1500, 1200);

  bgSound.play();
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  snowMan = new Snowman(1300,1100,300);

  ground = new Ground();
  
  cloud = new Cloud(750,700,70,100);

	Engine.run(engine);
  
}


function draw() {
  background(bg);
  Engine.update(engine);
  snowMan.display();
  ground.display();
  cloud.display();

  for (var n = 0; n < snow.length; n++) {
    snow[n].display();
}

if(frameCount%5===0){
  snow.push(new Snow(random(1300,100),60,60));
}

for (var n = 0; n < snow.length; n++) {
  snow[n].display();
}

if(frameCount%1===0){
snow.push(new Snow(random(1100,80),20,20));
}

  for (var m = 0; m < snow2.length; m++) {
    snow2[m].display();
}

if(frameCount%7===0){
  snow2.push(new Snow2(random(1300,100),30,30));
}
for (var l = 0; l < snow3.length; l++) {
  snow3[l].display();
}

if(frameCount%4===0){
snow3.push(new Snow3(random(1300,100),100,100));
}

}
