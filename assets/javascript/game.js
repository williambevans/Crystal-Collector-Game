var guessed = 
$(".crystals").click(function(){
  alert("image is clicked");  

}); 

var targetNumber = Math.floor((Math.random() * 120) + 19);
;


  $("#number-to-guess").text("Number to guess: " + targetNumber);
  $("#totalScore").text("Your total score is: " + increment);

  var counter = 0;
  var numberOptions = Math.floor((Math.random() * 12) + 1);
  var increment = numberOptions;
  


  $(".crystalsOne").on("click", function() {

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

   
    counter += increment;

    
    $( "#totalScore" ).append(counter);

    if (counter === targetNumber) {

      $( "#wins" ).append();
    }
    else if (counter >= targetNumber) {

      
      $( "#losses" ).append();
    }

  });


 