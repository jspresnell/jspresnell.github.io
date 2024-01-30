// Loader
$(window).on('load', function(){
  setTimeout(function(){
    $('.loader').fadeOut();
  }, 1500)
})

// Characters
var pics = ["aloy.jpg", "alyx.jpg", "amyrose.jpg", "arkgirl.jpg", "bayonetta.jpg", "chell.jpg", "chunli.jpg", "elena.jpg", "ellie.jpg", "faith.jpg", "huntress.jpg", "jill.jpg", "kassandra.jpg", "lauracroft.jpg", "lightning.jpg", "maya.jpg", "peach.jpg", "robin.jpg", "rosalina.jpg", "samus.jpg", "tifa.jpg", "willow.jpg", "yuna.jpg", "zelda.jpg"];

//My Guess Who Character
function myCharacter(){
  var myPic = Math.floor(Math.random() * pics.length);

  $("#me").html('<img src="img/' + pics[myPic] + ' ">');

  var name = pics[myPic].substr(0, pics[myPic].lastIndexOf("."))
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $("#name").html('You are ' + name);
}

myCharacter();


//Game Board
function shuffle() {
  pics.sort(function(a, b){return 0.5 - Math.random()});
  for (var i = 0; i < pics.length; i++) {
    $("#gameboard").append('<div class="card"><img src="img/' + pics[i] + ' "></div>');
  }
}

shuffle();

$("#gameboard").on('click', '.card', function(){
  $(this).toggleClass("flipped");
});

// Game Tracker
var win = 0;
var loss = 0;

$('#score').html(win + ' - ' + loss);

function updateScore(win, loss) {
  $('#score').html(win + ' - ' + loss);
}


$('#win').click(function(){
  win+=1;
  updateScore(win, loss);
  reset();
})

$('#loss').click(function(){
  loss+=1;
  updateScore(win, loss);
  reset();
})

// Reset Game Board

function reset(){
  var play = confirm('Do you want to play again?');
  if (play == true){
    $('#gameboard').html('');
    myCharacter();
    shuffle();
  } else {
    alert('Thanks for playing!');
  }
}