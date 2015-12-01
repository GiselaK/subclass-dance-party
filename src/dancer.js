// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


  this.$node = $('<span class="dancer"></span>');
  this.$colorNode = $('<span class="colorDance"></span>') ; 
  
  this.step();
  this.setPosition(top, left);
  this.time = timeBetweenSteps;
};

makeDancer.prototype.step = function() {
    setTimeout(this.step.bind(this), this.time);
    
  };



 makeDancer.prototype.setPosition = function(top, left) {
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
    this.$colorNode.css(styleSettings);
  };


makeDancer.prototype.lineUp = function (){
  this.$node.css({left: 10});
}