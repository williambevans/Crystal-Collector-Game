//var targetNumber = Math.floor((Math.random() * 120) + 19);

var targetNumber = 0;
var currentNumber = 0;
var wins = 0;
var losses = 0;

refreshGame();

function assignRandomNumbers() {
  $('img').each(function() {
    $(this).attr("value", Math.floor(Math.random() * 12));
  })
}



function refreshGame() {

  assignRandomNumbers();
  currentNumber = 0;
  targetNumber = 0;
  targetNumber = Math.floor(Math.random() * 120) + 19;
  $("#number-to-guess").text("Number to guess: " + targetNumber);
  $("#totalScore").text("Your current score: 0");
}

$('img').click(function() {

  var value = $(this).attr('value');
  currentNumber += parseInt(value);
  $('#totalScore').text("Your current score: " + currentNumber);

  if(currentNumber == targetNumber) {
    wins++;
    $('#wins').text(wins);
    refreshGame();
  }
  else if(currentNumber > targetNumber) {
    losses++;
    $('#losses').text(losses);
    refreshGame();
  }
})


