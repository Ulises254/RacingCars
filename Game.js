class Game{
    constructor(){}
    getState(){
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState= data.val();
        })
    }
    
    update(state){
        console.log(gameState);
        database.ref('/').update({
            gameState: state
        })
    console.log(gameState);
    }
    
    async start(){
        if(gameState==0){
            player= new Player();
            var playerCountRef= await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount= playerCountRef.val();
                player.getCount();
            }
            
            form= new Form();
            form.display();
        }
        car1= createSprite(100,200);
        car1.addImage(car1Img);
        car2= createSprite(300,200);
        car2.addImage(car2Img);
        car3= createSprite(500,200);
        car3.addImage(car3Img);
        car4= createSprite(700,200);
        car4.addImage(car4Img);
        cars= [car1, car2, car3, car4];
        
    }
    play(){
        console.log(gameState);
        form.hide();
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers != undefined){
            background("black");
            image(trckImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=175;
            var y;
            for(var plr in allPlayers){
                index++;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index==player.index){
                    //cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
            
            //displayPosition+=20;
            //text(allPlayers[plr].name+allPlayers[plr].distance,120,displayPosition);
            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!=null){
            player.distance+=50;
            player.update();
        }
        if(player.distance>4000){
            gameState=2;
            player.rank++;
            Player.updateCarsAtEnd(player.rank);
            gameend= new GameEnd();
            clear();
            gameend.display();
        }
        drawSprites();
    }
    end(){
        console.log("Game Over");
        console.log(player.rank);
    }
}