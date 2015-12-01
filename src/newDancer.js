var makeColorfulDancer = function(top, left, timeBetweenSteps){
    makeDancer.call(this, top, left, timeBetweenSteps);
    console.log(this.$node)
    this.$node.addClass = $('taco');
};

makeColorfulDancer.prototype = Object.create (makeDancer.prototype);


