class Virus{
    constructor(x,y){
        this.x = random(width)
        this.y = y
        this.hieght = 100
        this.width = 100
        this.angle = 0
        this.isCollide = false
        this.colour = 255
        this.image = loadImage("sprites/sprite_0.png")

    }


 display(){
     angleMode(DEGREES)
     push()
     translate(this.x,this.y)
     rotate(this.angle)
     fill(this.colour)
     
     
     imageMode(CENTER)
     image(this.image,0,0,this.width,this.hieght);
     this.angle = this.angle + 5
     pop()



 }
 coll(){
     if (this.isCollide === true){
         this.colour = true
                    } else {
                        this.color = 255                  
                     }
 }

 move(){
     this.y = this.y+5
 }

}