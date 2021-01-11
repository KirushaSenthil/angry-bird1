class Pig{
    constructor(x,y){

        this.body=Bodies.rectangle(x,y,50,50)
        this.width=50
        this.height=50
        
        World.add(myWorld,this.body)

    }
    display(){
        fill ("lightgreen")
        strokeWeight(4)
        var angle= this.body.angle
        console.log(this.body.angle);
        var pos= this.body.position
        push();
        translate (pos.x,pos.y)
        rotate (angle)
    
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    }
}