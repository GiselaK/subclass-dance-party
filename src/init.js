$(document).ready(function() {
  window.dancers = [];
  // window.dancerArrays = [];
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
    

    // if first type of dancer
    // if(!window[dancerMakerFunctionName + "Array"])
    //   // make a new array for that dancer on the global scope and push into array
    //   window[dancerMakerFunctionName + "Array"] = [];
    // // if not first type of dancer
    // else {

    //   // push dancer to dancerType array
    // }

    console.log(dancer.class)
    $('body').append(dancer.$node);
    $( ".dancer" ).draggable();
    /*$(".dancer").mouseover(function()
    {
      //$(this).addClass('colorDance');
      $(this).css({top: 10});
      //console.log(dancer.left);
    });*/
    
  });

$(".lineup").on("click", function(event) { //Lining up the nodes for now.
   
    for (var i = 0; i < window.dancers.length; i++) {
      
      if(window.dancers[i].$node[0].className.includes("taco")){
        window.dancers[i].lineUpRight();
        window.dancers[i].left = $("body").width()-10;
      }
      else {
        window.dancers[i].lineUpLeft();
        window.dancers[i].left = 10;
      }
      //window.dancers[i].top = $("body").height() * Math.random();
      //console.log("top: "+window.dancers[i].top);
    }
  });

/*
    var dancer = new makeDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$taco);
  });*/


  var checkPartner = function(){
    for(var i = 0; i < window.dancers.length; i++){
      for(var j = 0; j < window.dancers.length; j++){
        var leftDistance = Math.abs(window.dancers[i].left - window.dancers[j].left);
        var topDistance = Math.abs(window.dancers[i].top - window.dancers[j].top);
        var square = Math.pow(leftDistance, 2) + Math.pow(topDistance, 2);
        var distance = Math.sqrt(square);
        if(distance > 0 && distance < 100){

        }
      }
    }


  };

  
  setInterval(checkPartner, 1000);
  
});

