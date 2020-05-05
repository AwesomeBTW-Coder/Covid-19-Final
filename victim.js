class Victim {
    constructor(x,y){
        this.x = x
        this.y = y
        this.width = 700
        this.height = 200
        this.colour = "Blue"
        this.image = loadImage("sprites/manbtw.png")

    }

    display(){
        imageMode(CENTER)
        image(this.image,this.x,this.y,this.width,this.height)
    }
}