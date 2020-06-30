class Paper{

    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.radius=radius;
        this.body = Bodies.circle(x,y,radius , options);
        World.add(world, this.body);
    }

display(){
   

    ellipseMode(RADIUS);
    strokeWeight(4);
    stroke("purple");
    fill(255);
    ellipse(this.body.position.x,this.body.position.y, this.radius);
    
}


}