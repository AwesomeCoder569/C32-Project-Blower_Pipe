class Ball
{
  constructor(x, y, w, h) 
  {
    let options = {
     restitution:0.5
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(CENTER);
    noStroke();
    fill("grey");
    ellipse(pos.x,pos.y, this.w, this.h);
    pop();
  }
}