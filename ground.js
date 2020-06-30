class Ground {

    constructor() {

      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(600, 390, 1200, 20, options);
      this.body.position.x = 600;
      this.body.position.y = 390;
      this.width = 1200;
      this.height = 20;

      World.add(world, this.body);

    }

    display(){
      rectMode(CENTER);
      strokeWeight(4);
      stroke("yellow")
      fill("white");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };