$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

    $(".dancer").mouseover(function()
    {
      //$(this).addClass('colorDance');
      $(this).css({top: 10});
      //console.log(dancer.left);
    });
  });
$(".lineup").on("click", function(event) { //Lining up the nodes for now.
   
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp();
      window.dancers[i].left = 10;
      //window.dancers[i].top = $("body").height() * Math.random();
      //console.log("top: "+window.dancers[i].top);
    }
  });
/*$(".makeDancersLineUp").on("click", function(event) {

    var dancer = new makeDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$colorNode);
  });
  */
  var checkPartner = function(){
    for(var i = 0; i < window.dancers.length; i++){
      for(var j = 0; j < window.dancers.length; j++){
        var leftDistance = Math.abs(window.dancers[i].left - window.dancers[j].left);
        var topDistance = Math.abs(window.dancers[i].top - window.dancers[j].top);
        var square = Math.pow(leftDistance, 2) + Math.pow(topDistance, 2);
        var distance = Math.sqrt(square);
        // console.log("distance: "+distance);
        //console.log("leftDistance: "+leftDistance)
        //console.log("topDistance: "+ topDistance);
        if(distance > 0 && distance < 100){
          console.log("hi");
        }
      }
    }

  
  };

  
  setInterval(checkPartner, 1000);
  
});

