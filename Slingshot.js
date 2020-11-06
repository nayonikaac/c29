class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       image(this.image,230,20);
       image(this.image2,200,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(127, 66, 32)
            if(pointA.x<200){
             strokeWeight(6); 
             line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
             line(pointA.x-25,pointA.y,pointB.x+20,pointB.y-10);
             image(this.image3,pointA.x-30,pointA.y-10,15,30);
            }
            else{
            strokeWeight(10);
           line(pointA.x-25, pointA.y, pointB.x-20, pointB.y);
           line(pointA.x-25,pointA.y,pointB.x+20,pointB.y-10);
           image(this.image3,pointA.x-30,pointA.y-10,15,30);
           }
           pop()
        }
    }
    
}