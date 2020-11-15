class Box {
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x 
        this.y = y 
        this.width = width;
        this.height = height;
        World.add (world,this.body);
    }
      display(){
        rect(this.body.position.x,this.body.position.y,width,height) 
        rectMode(CENTER)
      }
}