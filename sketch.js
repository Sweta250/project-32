const Engine= Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint;
const Body=Matter.Body;
var score=0;
function preload(){
    poli=loadImage("polygon.png")
}
function setup(){
    engine= Engine.create();
    world=engine.world;
canvas = createCanvas(800,800);
ground = new Ground(400,780,800,20);
stand1 = new Ground(300,600,300,20);
stand2 = new Ground(600,400,300,20);

box1= new Box(300,580);
box2=new Box(270,580);
box3=new Box(240,580);
box4=new Box(330,580);
box5=new Box(360,580);

box6=new Box(300,540);
box7=new Box(270,540);
box8=new Box(330,540);

box9=new Box(300,500);

box10 = new Box(600,380);
box11 = new Box(630,380);
box12 = new Box(660,380);
box13 = new Box(570,380);
box14 = new Box(540,380);

box15 = new Box(600,340);
box16 = new Box(570,340);
box17 = new Box(630,340);

box18 = new Box(600,300);

ball = Bodies.circle(200,300,20);
World.add(world,ball);

sling = new Chain(this.ball,{x:200,y:300});

}
function draw(){
    background(0);
    Engine.update(engine);
    fill("white");
    textSize(30);
    text("Score: "+score,100,400);
    ground.display();
    stand1.display();
    stand2.display();
    fill("red");
    box1.display();
    box1.getscore();
    box2.display();
    box2.getscore();
    box3.display();
    box3.getscore();
    box4.display();
    box4.getscore();
    box5.display();
    box5.getscore();
    fill("blue");
    box6.display();
    box6.getscore();
    box7.display();
    box7.getscore();
    box8.display();
    box8.getscore();
    fill("purple");
    box9.display();
    box1.getscore();
    fill("aqua");
    box10.display();
    box10.getscore();
     box11.display();
     box11.getscore();
     box12.display();
     box12.getscore();
      box13.display();
      box13.getscore();
      box14.display();
      box14.getscore();
      fill("pink")
      box15.display();
      box15.getscore();
      box16.display();
      box16.getscore();
      
      box17.display();
      box17.getscore();
      fill("white")
      box18.display();
      box18.getscore();

       
        
      
        
      
      

//ellipseMode(RADIUS);
imageMode(CENTER)
fill("gold");
//ellipse(ball.position.x,ball.position.y,20,20);
image(poli,ball.position.x,ball.position.y,40,40);
sling.display();
      
    } 
function mouseDragged(){
Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
sling.fly();
}
function keyPressed(){
if(keyCode===32){
    sling.attach(this.ball);
    Matter.body.setPosition(this.ball,{x:200,y:500});
}

  }

   

