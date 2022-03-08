class Form{
    constructor(){
        this.title=createElement('h2');
        this.input=createInput("Name:");
        this.button=createButton('PLAY');
        this.reset=createButton("RESET");
        this.greeting=createElement('h3');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        this.title.html("RACING CARS");
        this.title.position(200,50);

        
        this.input.position(175,150);

        
        this.button.position(175,200);
        this.reset.position(displayWidth-100,20);
        this.reset.mousePressed(()=>
        {
            player.updateCount(0);
            game.update(0);
            Player.updateCarsAtEnd(0);
        }
        )
        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();
            player.name= this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(175,150);
        }
        )
    }
}