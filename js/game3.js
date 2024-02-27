// Characters
var pics = ["al.jpg", "amy.jpg", "ben.jpg", "carmen.jpg", "daniel.jpg", "david.jpg", "emma.jpg", "eric.jpg", "farah.jpg", "gabe.jpg", "joe.jpg", "jordan.jpg", "katie.jpg", "laura.jpg", "leo.jpg", "lily.jpg", "liz.jpg", "mia.jpg", "mike.jpg", "nick.jpg", "olivia.jpg", "rachel.jpg", "sam.jpg", "sophia.jpg"];

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
