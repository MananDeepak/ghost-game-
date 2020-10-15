 var gameState="play"
var tower,towerimg;
var doorimg,doorsGroup;
var climberimg,climbersGroup;
var ghost,ghostimg;
var invisibleGroup;
var game;

function preload(){
 towerimg=loadImage("tower.png")
doorimg=loadImage("door.png")
climberimg=loadImage("climber.png") 
 ghostimg=loadImage("ghost-standing.png") 
 game=loadSound ("spooky.wav")
}

function setup(){
createCanvas(600,600)
 game.loop(); 
tower=createSprite(300,300)
tower.addImage("tower",towerimg)
tower.velocityY=1;
  
ghost=createSprite(200,200,50,50)
 ghost.addImage("ghost",ghostimg) 
 ghost.scale=0.45
  
  
doorsGroup=new Group();
 climbersGroup=new Group();
  invisibleGroup=new Group();
}

function draw(){
background(0);
  if(gameState==="play"){
    
  
if(tower.y >400){
tower.y=300;  
} 
  
if(keyDown("space")) {
ghost.velocityY=-5
} 
  
ghost.velocityY=ghost.velocityY+0.8
  
if(keyDown("left_arrow")) {
ghost.x=ghost.x-3
} 
 if(keyDown("right_arrow")) {
ghost.x=ghost.x+3
}  
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY=0;
  }
   if(invisibleGroup.isTouching(ghost)|| ghost.y>600){
ghost.destroy();
gameState="end"     
  }
  
spawnDoors();  
drawSprites(); 
  } 
  if(gameState==="end"){
    text("GAME OVER",230,250)
  }
}

function spawnDoors(){
 if( frameCount%240===0 ){
 var door=createSprite(200,-50)
  door.addImage("door",doorimg)
   
var climber=createSprite(200,10)
climber.addImage("climbers",climberimg)
   
 var inv=createSprite(200,15)
 inv.width=climber.width
inv.height=2
   
door.x=Math.round(random(120,400))
 door.velocityY=1;
 
climber.x=door.x
climber.velocityY=1;
   
inv.x=door.x
inv.velocityY=1;
 
 ghost.depth=door.depth  
 ghost.depth=ghost.depth+1
   
door.lifetime=800;
climber.lifetime=800
inv.lifetime=800   
   
doorsGroup.add(door);
climbersGroup.add(climber)
invisibleGroup.add(inv)   
 }
}







