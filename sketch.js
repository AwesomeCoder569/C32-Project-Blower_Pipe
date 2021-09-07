const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ball;

var blower;
var blowerMouth;


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width/2, height/2 - 50, 50, 50);
  blowerMouth = new Blower(width/2, height/2 + 100, 200, 150);
  blower = new Blowermouth(width/2 - 225, height/2 +145, 250, 40);

  button = createButton("Click to Blow");
  button.position(width/2 - 40, height - 130);
  button.class("blowButton");
  button.mousePressed(blow);
}

function draw() {
  background(51);
  Engine.update(engine);

  ball.show();
  blowerMouth.show();
  blower.show();
}

function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0}, {x: 0, y:0.05})
}
