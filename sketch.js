var car,wall,speed,weight;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(40, 200, 50, 50);
  wall=createSprite(1250,200,40,height/2);
 wall.shapeColor=color(80,80,80)
car.velocityX=speed;


}

function draw() {
  background(0); 
 
// thickness=random(25,80);
//car.collide(wall) ;
wall.x-car.x<(car.width+wall.width)/2;
  wall.setCollider("rectangle");

car.setCollider("rectangle");


if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX=0;
   var deformation=0.5 * weight * speed * speed / 22500;
  //console.log(deformation);

}
if(deformation>180){
  car.shapeColor=color(255,0,0);
}
if(deformation>100&&deformation<180){
  car.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
}



  drawSprites();
}