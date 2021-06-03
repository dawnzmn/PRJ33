class Cloud{
    constructor(x,y,width,height){
        var options = {
            isStatic: false
        }
       this.width = width;
       this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("white");
        strokeWeight(15); 
        rectMode(CENTER);
        rect(this.body,pos.x,pos.y,this.width,this.height);
    }
}