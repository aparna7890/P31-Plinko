class Plinko{
    constructor(x, y, r){
        var options = {
            isStatic : true
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body)
    }
    display(){
        ellipseMode(CENTER)
        fill("white")
        ellipse(this.body.position.x, this.body.position.y, this.r)
    }
}