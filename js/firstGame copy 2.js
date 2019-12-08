 //Arcade Shooter game


                
var AN = AN || {};
var x = 0;
var y = 0;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var img = new Image();
var nos = new Image();
nos.src = "img/nos.png";
img.src = "img/reindeer.png";

img.onload = function() {
     context.drawImage(img, 200 , 0, 500, 1000, );
};
    
     AN.initialize = function() {
        //load canvas
        canvas = $('#canvas');
        canvas.mousemove(AN.moveMouse);
        context = canvas[0].getContext('2d');   
 };
// console.log(canvas);
AN.moveMouse = function (e) {
    var element = $(nos);
    var t = 0; //0-1, this is what you change in animation loop
    var position = getMousePosition(e);
    function myLoop() {  
      context.clearRect(0, 0, canvas.width(), canvas.height());
  
      x += EasingFunctions.easeInOutQuad(t) * (position.x - x);
      y += EasingFunctions.easeInOutQuad(t) * (position.y - y);
  
      // set element by tx
      context.drawImage(pic, x, y, pic.width, pic.height);
  
      if (t < 1) {
        t += 0.01; //determines speed
        requestAnimationFrame(myLoop);
        //setTimeout(myLoop, 16); //option to above
      }
    }
    myLoop();
  };

EasingFunctions = {
  linear: function(t) {
    return t;
  },
  easeInQuad: function(t) {
    return t * t;
  },
  easeOutQuad: function(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function(t) {
    return t * t * t;
  },
  easeOutCubic: function(t) {
    return (--t) * t * t + 1;
  },
  easeInOutCubic: function(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function(t) {
    return t * t * t * t;
  },
  easeOutQuart: function(t) {
    return 1 - (--t) * t * t * t;
  },
  easeInOutQuart: function(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
  },
  easeInQuint: function(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function(t) {
    return 1 + (--t) * t * t * t * t;
  },
  easeInOutQuint: function(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
  }
}

function getMousePosition(e) {
    return {
        x: e.clientX - pic.width * 0.5,
        y: e.clientY - pic.height * 0.5
    }
}

$(document).ready(function() {
  //initialize funtion
  AN.initialize();
});

// Start the game
// context.drawImage(img, 10, 10)
// menu();
// canvas.focus();