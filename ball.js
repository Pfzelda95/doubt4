class Ball{
    constructor() {
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.3

        }
        this.body = Bodies.circle(200 , 100 ,20 ,options);
        
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
       ellipse(pos.x,pos.y,20,20);
        
        
        
     }
}