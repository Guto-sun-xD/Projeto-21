class Ground{
constructor(x,y,w,h){
var options={
   isStatic: true
}
    this.ground = Bodies.rectangle(x,y,w,h,options);
    World.add(world,this.ground)
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
}

display(){
rect(this.x,this.y,this.w,this.h);


}


}