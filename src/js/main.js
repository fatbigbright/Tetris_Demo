window.onload = function(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var stage = {
        position: {
            x: 250,
            y: 10
        },
        width: 300,
        height: 580,
        draw: function(){
            context.moveTo(this.position.x - 1, this.position.y + 1);
            context.lineTo(this.position.x + this.width + 1, this.position.y + 1);
            context.lineTo(this.position.x + this.width + 1, this.position.y + this.height + 2);
            context.lineTo(this.position.x - 1, this.position.y + this.height + 2);
            context.lineTo(this.position.x - 1, this.position.y + 1);
            context.strokeStyle = "White";
            context.stroke();
            context.fillStyle = "Black";
            context.fillRect(this.position.x, this.position.y + 1, this.width, this.height);
        }
    };

    var play = document.getElementById("playMusic");
    play.onclick = function(){
        var music = document.createElement("audio");
        music.src = "http://www.w3school.com.cn/i/horse.ogg";
        music.addEventListener("canplaythrough", function(){
            music.play();
        }, false);
    }

    stage.draw();
};
