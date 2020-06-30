class Bin{
    constructor(x, y, width, height,) {
        var options = {
            isStatic: true
        }
       this.body = Bodies.rectangle(x, y, width, height, options);
       this.width = width;
       this.height = height;
       


}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(4);
    stroke("red");
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
}
}

