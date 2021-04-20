class Drops {
    constructor(x,y){
var options ={
    friction:0.8,
    restitution:4,
}
this.rain = Bodies.circle(x,y,5,options);
World.add(world,this.rain);

    }
    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,5,5);
    }
    update(){
        if(this.rain.position.y>height){
          Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
}