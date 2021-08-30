var path ;
var Runner; 
Runner_running;
 var coin;var coin;var energyDrink;var power;var boundary1;var boundary2;

function preload(){
  //pre-load images
  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImg = loadImage("path.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  //Moving background
  createCanvas(2000,1000);
    path = createSprite(1800,1000, 1600,800);
    path.addImage(pathImg);
    path.velocityY =4;
    path.scale =1.2;
    path.x = path.height/2;

  //create sprites here
 Runner = createSprite(1000,800,20,20);
Runner.addAnimation("running",Runner_running);
 Runner.scale=0.1;;
 RunnerScore=0;

boundary1 = createSprite(800,500,10,1000);

boundary2= createSprite(1200,500,10,1000);

}
function draw() {
  background("white");

  
  //code to reset the background
  if(path.y>400){
    path.y = path.height/2;
  }



  Runner.x= World.mouseX;
  Runner.collide(boundary1);
  Runner.collide(boundary2);
 

    drawSprites();

text("Runner Score",1300,900);
textSize(120);
fill("black");
}
if(Runner.isTouching(coin)||Runner.isTouching(coin4)||Runner.isTouching(energyDrink)){
   RunnerScore = RunnerScore + 1;
}
 
