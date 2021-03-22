class Plinko{
    constructor(x,y,r){
    var options={
        isStatic: true
    }
    this.r=r;
    this.body=Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    }
    display(){
        var p= this.body.position;
        push();
        ellipseMode(RADIUS);
        fill("red");
        ellipse(p.x,p.y,this.r,this.r);
        pop();
    }
}