const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine,world;
var divisions=[];
var plinkos=[];
var particles=[];
var score=0;
var count=0;
var dline;
var particle;
var gameState="start";

function preload(){


}
function setup() {

 createCanvas(490,800);

 engine= Engine.create();
 world= engine.world;

 //dline=new Ground(245,570,490,10,"yellow");
 dline=createSprite(245,570,490,10);
 dline.shapeColor="yellow";

ground=new Ground(245,780,490,10,"brown");

for(var d =0;d<=width;d = d+80){
  divisions.push(new Divisions(d,680,10,200));
  
}  
for(var p = 5;p<=width;p=p+40){
  plinkos.push(new Plinko(p,100,7));
}
for(var p = 5;p<=width;p=p+60){
  plinkos.push(new Plinko(p,200,7));
}
for(var p = 5;p<=width;p=p+40){
  plinkos.push(new Plinko(p,300,7));
}
for(var p = 5;p<=width;p=p+60){
  plinkos.push(new Plinko(p,400,7));
}


 //createSprite(400, 200, 50, 50);
}


//var divisionHeight= 300;

function draw() {
  background("aqua");
  Engine.update(engine);


  
  ground.display();
  //dline.display();
  

  textSize(50);
  fill("purple");
  text("PLINKO",140,50);

  //if(frameCount%60 === 0){
  //  particles.push(new Particle(random(width/2-10,width/2+10),5,7));
 // }
 if ( gameState =="end") {
    

  textSize(90);
  text("GameOver", 150, 300);
 }
    
    for(var j=0;j<divisions.length;j++){
      divisions[j].display();
  
    }
    for(var k=0;k<plinkos.length;k++){
      plinkos[k].display();
  
    }
   // for(var l=0;l<particles.length;l++){
   //   particles[l].display();
  
   // }
    drawSprites();
    textSize(20)

    text("500",20,600);
    text("400",100,600);
    text("100",180,600);
    text("100",260,600);
    text("200",340,600);
    text("300",420,600);
    text("Score:"+score,20,30);
    text("Turns:"+count,400,30);

    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>600)
        {
              if (particle.body.position.x < 80) 
              {
                  score=score+500;      
                  particle=null;


                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 160 && particle.body.position.x > 81 ) 
              {
                    score = score + 400;
                    particle=null;
                   

                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 320 && particle.body.position.x > 160 )
              {
                    score = score + 100;
                    particle=null;
             

                    if ( count>= 5)  gameState ="end";

              } 
              else if (particle.body.position.x < 400 && particle.body.position.x > 320 )
              {
                    score = score + 200;
                    particle=null;

                    if ( count>= 5)  gameState ="end";

              }      
              
              else if (particle.body.position.x < 480 && particle.body.position.x > 400 )
              {
                    score = score + 300;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              

              
        }
  

  }


 

 // for (var k=0; k=k<=width; k=k+80 ){
 //   divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
     
  //}

}
function keyPressed()
{
  if(keyCode===32){
  if(gameState!=="end")
  {
      count=count+1;
     particle=new ColouredParticle(mouseX, 10, 7); 
  }   
}
}