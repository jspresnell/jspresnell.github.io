// Characters
var pics = ["drake.jpg", "john.jpg", "mia.jpg", "mj.jpg", "muhammad.jpg", "pj kid.jpg", "rick.jpg", "taylor.jpg", "brian.jpg", "chloe.jpg", "drew.jpg", "gavin.jpg", "giorgio.jpg", "harold.jpg", "michael.jpg", "nicholas.jpg", "nick meme.jpg", "reece.jpg", "renata.jpg", "salt bae.jpg", "sam meme.jpg", "silvia.jpg", "steve meme.jpg", "zoe.jpg"];

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
