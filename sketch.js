
var database;
var form;
var game;
var player;
var gameState=0;
var playerCount;
var allPlayers;
var distance=0;
var car1, car2, car3, car4, cars;
var car1Img, car2Img, car3Img, car4Img, trckImg;
var gameend;

function preload(){
    car1Img= loadImage("car1.png");
    car2Img= loadImage("car2.png");
    car3Img= loadImage("car3.png");
    car4Img= loadImage("car4.png");
    trckImg= loadImage("track.jpg");
}

function setup(){
    database=firebase.database();
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount==4){
        game.update(1);
    }


    if(gameState==1){
        console.log(gameState);
        clear();
        game.play();
    }

    if(gameState==2){
        game.end();
    }
    
}


