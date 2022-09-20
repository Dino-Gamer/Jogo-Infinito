//VARIAVEIS

var fogueteImg, meteoroImg, espacoImg, estrelaImg, explosaoImg;

var foguete, meteoro, espaco, estrela, explosao;

var meteoroGroup, estrelaGroup;

var score = 0;



//PRELOAD
function preload(){
fogueteImg = loadAnimation("fogueteremovebgpreview.png");
meteoroImg = loadImage("Meteoritoremovebgpreview.png");
espacoImg = loadImage("rspaçodojogo.jpg");
estrelaImg = loadImage("estrelaremovebgpreview.png");
explosaoImg = loadAnimation("explosaoremovebgpreview.png");
}

function setup() {
    createCanvas(400, 400);

    espaco = createSprite(200, 200);
    espaco.addImage(espacoImg);
    espaco.scale = 1.8;

    foguete = createSprite(200, 300);
    foguete.addAnimation("foguete", fogueteImg);
    foguete.scale = 0.2;

    meteoro = createSprite(200, 0);
    meteoro.addImage(meteoroImg);
    meteoro.scale = 0.2;

    explosao = createSprite(500, 500);
    explosao.addAnimation("explosao", explosaoImg);
    explosao.scale = 0.4;

    estrela = createSprite(200,200);
    estrela.addImage(estrelaImg);
    estrela.scale = 0.1;
    
    //Collider
    foguete.setCollider("circle",0,0,150);
    foguete.debug = false;

    meteoroGroup = new Group();
    estrelaGroup = new Group();
   
    
 
}
//DRAW
function draw() {
 background(0);





      //velocidades

      meteoro.velocityY = +4;

       //Espaço reniciar
       if (espaco.y > 200){
         espaco.y = 400;
      }
     
      if (espaco.y < 0){
         espaco.y = espaco.widht/2;
      }

        //Velocidade do foguete
      if (keyDown("w") || keyDown("up")){
         foguete.y = foguete.y-3;
      }
 
      if (keyDown("s") || keyDown("down")){
         foguete.y = foguete.y+3;
      }
      if (keyDown("a") || keyDown("left")){
         foguete.x = foguete.x-3;
      }
      if (keyDown("d") || keyDown("right")){
         foguete.x = foguete.x+3;
      }


    //tocar na estrela

    if (foguete.isTouching(estrela)){
        score = score+1;

        estrela.x = Math.round(random(10, 190));
        estrela.y = Math.round(random(10, 190));
    }

   //Chamar funcões
   //criarMeteoros();
   //criarEstrelas();



     //Meteoro reniciar
     if (meteoro.y > 420){
        meteoro.y = -20;
        meteoro.x = Math.round(random(10, 390));
     }




    if (foguete.isTouching(meteoro)){
      explosao.x = foguete.x;
      explosao.y = foguete.y;

      foguete.destroy();
      meteoro.destroy();
     }


     drawSprites();

     //exibindo pontuação
     textSize(20)
     text("Pontuação: "+ score, 260,25);


 }




   
 










