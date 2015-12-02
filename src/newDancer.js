var makeColorfulDancer = function(top, left, timeBetweenSteps){
    makeDancer.call(this, top, left, timeBetweenSteps);
    console.log(this.$node)
    this.$node.addClass('taco');
    this.currentWidth = 80;
};

makeColorfulDancer.prototype = Object.create (makeDancer.prototype);

makeColorfulDancer.prototype.eat = function (){
  console.log("node: ",this)
  // this.$node.addClass('eat');
  this.currentWidth-=8;
   $(this.$node).css({width: this.currentWidth});
   $(this.$node).css("background-image", "url(https://media.giphy.com/media/8K1IYSnhUaNH2/giphy.gif)")

}

