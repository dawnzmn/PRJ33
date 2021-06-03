class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(750,1300,1500,300,ground_options)
          World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        rectMode(CENTER);
        rect(this.body,pos.x,pos.y,1500,300);
    }
}