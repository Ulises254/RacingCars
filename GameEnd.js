class GameEnd{
    constructor(){
        this.logoImage="https://img.freepik.com/vector-gratis/juego-terminado-efecto-falla_225004-661.jpg";
        this.logo=createImg(this.logoImage);
        this.title=createElement('h2');
        this.rank= createElement('h1');
    }

    display(){
        this.logo.position(300, 300);
        this.title.position(width/2, 10);
        this.title.html("GAME OVER");
        this.rank.position(width/2, height/2);
        this.rank.html("Lugar: "+player.rank);
    }

}