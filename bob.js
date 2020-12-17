class Bob{
    constructor(x,y,radius){
     var options = {
        
       restitution: 1.0,
       friction: 0.3,
       density: 0.8
       
       

       
     }   
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius
    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position
    ellipseMode(RADIUS)
    strokeWeight(4)
    stroke("blue")
    fill(255);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    
    }
    }