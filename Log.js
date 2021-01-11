class Log{
    constructor(x,y,height,angle){
        var options={
            friction:1
        }

        this.body=Bodies.rectangle(x,y,20,height,options)
        this.width=20
        this.height=height
        Matter.Body.setAngle(this.body,angle)
        World.add(myWorld,this.body)

    }
    display(){
        fill ("black")
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