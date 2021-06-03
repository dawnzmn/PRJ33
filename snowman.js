class Snowman{
    constructor(x,y,r){
            var options = {
                isStatic: true 
            };
            this.x=x;
            this.y=y;
            this.r=r;
            this.image=loadImage("snowman.png");
            this.body=Bodies.circle(this.x, this.y, /*(this.r/2),*/this.r, options);
            World.add(world, this.body);
        }

    display(){
        var snowmanPos=this.body.position;		
        push()
        translate(snowmanPos.x, snowmanPos.y-100);
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r, this.r)
        pop()
    }
    } 