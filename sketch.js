const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var ball,ground;
var engine,world;

function setup()
{
var canvas=createCanvas(400,400);
engine = Engine.create();
world = engine.world;


ball=Bodies.circle(200,30,20,{restitution:1});
World.add(world,ball);



ground = Bodies.rectangle(200,380,400,20,{isStatic:true});
World.add(world,ground);
}

function draw()
{
  background("yellow");
  Engine.update(engine);
  circle(ball.position.x,ball.position.y,20,20);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);


}