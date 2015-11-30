// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


  this.$node = $('<span class="dancer"></span>');
  
  this.step();
  this.setPosition(top, left);
  this.time = timeBetweenSteps;
  //this.initialize();
};

makeDancer.prototype.step = function() {
    setTimeout(this.step, this.time);
    
  };
makeDancer.prototype.step();


 makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
  };


