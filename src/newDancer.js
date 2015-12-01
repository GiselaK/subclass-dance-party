var makeColorfulDancer = function(){
    makeDancer.call(this, top, left, timeBetweenSteps);
};

makeColorfulDancer.prototype = Object.create (makeDancer.prototype);
