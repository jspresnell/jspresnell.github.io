// Characters
var pics = ["aloy.jpg", "alyx.jpg", "amyrose.jpg", "arkgirl.jpg", "bayonetta.jpg", "chell.jpg", "chunli.jpg", "elena.jpg", "ellie.jpg", "faith.jpg", "huntress.jpg", "jill.jpg", "kassandra.jpg", "lauracroft.jpg", "lightning.jpg", "maya.jpg", "peach.jpg", "robin.jpg", "rosalina.jpg", "samus.jpg", "tifa.jpg", "willow.jpg", "yuna.jpg", "zelda.jpg"];

//My Guess Who Character
function myCharacter(){
  var myPic = Math.floor(Math.random() * pics.length);

  $("#me").html('<img src="img/' + pics[myPic] + ' ">');

  var name = pics[myPic].substr(0, pics[myPic].lastIndexOf("."))
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
