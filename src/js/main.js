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

  /*
  var game = {
    var shape1 = [[0,0,0,1,1,1,1,2],[1,0,2,0,0,1,1,1]];
    var shape2 = [];
    var shape3 = [];
    var shape4 = [];
    var shape5 = [];
    var shape6 = [];
    var shape7 = [];
  };
  */

  stage.draw();
};
