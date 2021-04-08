class Paper {
    constructor(x, y) {
      this.image=loadImage("paper.png") 

         var options = {
        isStatic: false,
        density:1.2,
        friction: 0,
        restitution:0.3

    
      };
      this.body = Bodies.rectangle(x, y, 50, 25, options);
      this.width = 50;
      this.height = 25;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("black")
      imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height);
      pop();
    };
  };
  