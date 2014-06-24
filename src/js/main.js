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
    height: 720,
    block_width: 30,
    block_height: 30,
    maxAxisX: 10,
    maxAxisY: 24,
    frame: [],
    init: function(){
      this.frame = new Array();
      for(var x = 0; x < maxAxisX; x++){
        this.frame[0] = new Array();
        for(var y = 0; y < maxAxisY; y++){
          this.frame[x][y] = 0;
        }
      }
    },
    draw: function(){
      this.position.x = (canvasWidth - this.width)/2;
      this.position.y = (canvasHeight - this.height)/2;
      context.moveTo(this.position.x - 1, this.position.y - 1);
      context.lineTo(this.position.x + this.width + 1, this.position.y - 1);
      context.lineTo(this.position.x + this.width + 1, this.position.y + this.height + 1);
      context.lineTo(this.position.x - 1, this.position.y + this.height + 1);
      context.lineTo(this.position.x - 1, this.position.y - 1);
      context.strokeStyle = "White";
      context.stroke();
      context.fillStyle = "Black";
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  };

  var game = {
    0 : [[0,1,0,0,
          0,1,0,0,
          0,1,1,0,
          0,0,0,0],

         [0,0,0,0,
          0,0,0,1,
          0,1,1,1,
          0,0,0,0],
          
         [0,0,1,1,
          0,0,0,1,
          0,0,0,1,
          0,0,0,0],
         
         [0,0,0,1,
          0,1,1,1,
          0,0,0,0,
          0,0,0,0]]
  };

  //stage.draw();
  var FPS = 30;
  setInterval(function(){
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    stage.draw();
  }, 1000/FPS);
};
