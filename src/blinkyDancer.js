var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

	makeDancer.call(this, top, left, timeBetweenSteps);
	//var oldStep = this.step;
 	
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
    //console.log("hi");
    //oldStep();
    makeDancer.prototype.step.call(this);
    if(this.$node !== undefined){
    this.$node.toggle();
}
  };

  