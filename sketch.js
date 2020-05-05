

var player;
var enemy;
var enemies=[]
var drops = []
var bg 
var man 
function preload(){
  bg = loadImage("sprites/bg.jpg")
}


function setup() {
 
  createCanvas(1200,800);
  
 player = new Sanitizer(40,450);
 man   = new Victim(600,700);
 
 







}

function draw() {
  background(bg);  
  for (var i =0;i<enemies.length;i++){
    enemies[i].display();
    enemies[i].move();
  }

 if (World.frameCount%50===0){
   var enemy = new Virus(600,-10)
   enemies.push(enemy)
   
 }

 detectCollisions();

  player.display();
  for(var i = 0;i<drops.length;i++){
    drops[i].display()
    drops[i].sanitize()
  }
  
  man.display()
}

function keyPressed(){
  if (keyCode===32){
    var drop = new Drop(player.x,450,5,10)
   drops.push(drop)
  }
}

function detectCollisions(){
  var obj1, obj2
  //reset the collision states of all objects
  for (var i = 0; i<enemies.length; i++){
    enemies[i].isCollide=false
  }
  for(var j = 0; j<drops.length; j++){
    drops[j].isCollide = false

  }
  //start checking for collisions
  for(var i = 0; i<enemies.length;i++){
    enemies[i].coll()
    obj1=enemies[i]
    for(var j = 0; j<drops.length; j++){
      drops[j].coll()
      obj2=drops[j]

    }
    //compare obj1 with obj2
    if(rectIntersect(obj1.x,obj1.y,obj1.width,obj1.height,obj2.x,obj2.y,obj2.width,obj2.height)){
      obj1.isCollide=true
      obj2.isCollide=true
      console.log("working")
    }
  }
}

function rectIntersect(x1,y1,w1,h1,x2,y2,w2,h2){
  if(x2>w1+x1||x1>w2+x2||y2>h1+y1||y1>h2+y){
    return false 
  }
  return true
}
