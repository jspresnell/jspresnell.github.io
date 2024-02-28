// Characters
var pics = ["ackbar.jpg", "biggs.jpg", "boba.jpg", "bossk.jpg", "c3p0.jpg", "chewbacca.jpg", "ewok.jpg", "greedo.jpg", "han.jpg", "jabba.jpg", "jawa.jpg", "lando.jpg", "leia.jpg", "luke.jpg", "mon.jpg", "obiwan.jpg", "oola.jpg", "palpatine.jpg", "r2d2.jpg", "r5d4.jpg", "yoda.jpg", "stormtrooper.jpg", "tarkin.jpg", "vader.jpg"];

//My Guess Who Character
function myCharacter(){
  var myPic = Math.floor(Math.random() * pics.length);

  $("#me").html('<img src="img/' + pics[myPic] + ' ">');

  var name = pics[myPic].substr(0, pics[myPic].lastIndexOf("."))
  name = name.charAt(0).toUpperCase() + name.slice(1);
  $("#name").html('You ');
  //$("#name").html('You are ' + name);
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
