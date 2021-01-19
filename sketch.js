const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var chain,ground

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,200,20,20)
    box1 = new Box(100,150,20,20)
    box2 = new Box(150,200,20,20)

   
    chain = new chain(box1,box2,box3,box4,box5,box6,box7,box8,box9.body,{x:200, y:50});
}

function draw(){
    background("pink")
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    chain.display();    

}

