
var car;
 var wall; 
 var road; 
 var carspeed = 0 ;
  var carweight=1500; 

  function setup() 
  { 
    createCanvas(800,400);
     road = createSprite(400,200,700,120);
      wall = createSprite(720,200,30,80); 
      car = createSprite(100,200,25,25);
     }
     
     function draw()
      { background("black"); 
      road.shapeColor = "blue";
       wall.shapeColor= "white"; 
       
       var deformation = 10*carweight*carspeed*carspeed/22500; 

 
       if (deformation>10 && deformation<80 && car.isTouching(wall)&& frameCount%80==0 ) {
         car.shapeColor="green";
       }
       if (deformation>80 && deformation<120&& car.isTouching(wall)&& frameCount%80==0  ) {
        car.shapeColor="yellow";
      }
      if (deformation>120 && deformation<180&& car.isTouching(wall) && frameCount%80==0 ) {
        car.shapeColor="brown";
        
      }
      if (deformation>180 && car.isTouching(wall) && frameCount%80==0 ) {
        car.shapeColor="red"
      }
      
 carspeed = Math.round(random(4,15));
 car.velocityX=carspeed; 
 car.collide(wall);
 console.log(deformation); 
 drawSprites();

    }





























































