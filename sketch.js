const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300

function setup(){
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 790, 480, 20)
  
  //create divisions (they need to be created only once, so will write the code to create them in setup())
  for(k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight / 2, 10, divisionHeight))
  }

  //create plinkos/pegs (they need to be created only once, so will write the code to create them in setup())
  //create plinkos: row1
  for(i = 40; i <= width; i = i + 50){
    plinkos.push(new Plinko(i, 75))
  }

  //create plinkos: row2
  for(i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i, 175))
  }

  //create plinkos: row3
  for(i = 40; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i, 275))
  }

  //create plinkos: row4
  for(i = 15; i <= width - 10; i = i + 50){
    plinkos.push(new Plinko(i, 375))
  }
}

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();

  //create particles (they need to be created multiple times, so will write the code to create them in draw())
   if(frameCount % 60 === 0){
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10))
  }

  //display particles
  for(var j = 0; j < particles.length; j++){
    particles[j].display()
  }

  //display divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display()
  }
  
  //display plinkos
  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display()
  }
}