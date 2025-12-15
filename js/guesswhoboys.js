// Characters
var pics = ["beat.jpg", "nathan.jpg", "cj.jpg", "cloud.jpg", "crash.jpg", "dante.jpg", "ezio.jpg", "gordon.jpg", "hitman.jpg", "john.jpg", "kratos.jpg", "leon.jpg", "link.jpg", "luigi.jpg", "mario.jpg", "chief.jpg", "phoenix.jpg", "ratchet.jpg", "sephiroth.jpg", "snake.jpg", "sonic.jpg", "sora.jpg", "spyro.jpg", "steve.jpg"];

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
