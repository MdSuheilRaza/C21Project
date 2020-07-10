//declaring the variables
var bullet,wall,thickness;
var speed,weight

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(255,255,255);
 bullet.velocityX = speed;
  
hasCollided(Lbullet,Lwall);
 
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=Lbullet.x+Lbullet.width;
  wallLeftEdge=Lwall.x;
  

  if(bulletRightEdge>=wallLeftEdge){
    return true;

    
  }
  return false;

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=colo(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }


}