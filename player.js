class Sanitizer{
  constructor(x,y){
   this.x=x
   this.y =y
   this.width =  100
   this.hieght = 100
   this.image = loadImage("sprites/sanitizer2.png")
  }

  
  display(){
     
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.hieght);
      this.x = mouseX
  }
 
}