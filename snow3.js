class Snow3{
    constructor(x,y,r){
        var options={
         friction: 0.5,
         restitution: 0.2,
         setStatic: false
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.Visibility = 255;
        this.image = loadImage("4snowflake.png");
        World.add(world,this.body);
    }

    display(){

if(this.body.speed>25){
    ellipseMode(RADIUS);
    fill("white"); 
     ellipse(0,0,this.r,this.r);
     console.log(this.body.speed);
}
    push();    
     this.Visibility = this.Visibility - 3;
    tint(255,this.Visibility);   
    var pos = this.body.position;
    var angle = this.body.angle;
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r);
    pop();

}
}