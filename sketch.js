const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground, box1,box2;
function setup(){
    var canvas = createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;
   
    ground=new Ground(200,390,400,20)
    console.log(ground);
    box2=new Box(139,50,70,50);
    box1 = new Box(140,50,70,50);
}
function draw(){
    background(0);
    Engine.update(engine);
   
box2.display()
ground.display()
    box1.display();
}