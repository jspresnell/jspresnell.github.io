// Characters
var pics = ["aayla.jpg", "anakin.jpg", "battle droid.jpg", "c3po.jpg", "clone.jpg", "cody.jpg", "dooku.jpg", "grievous.jpg", "gunray.jpg", "jango.jpg", "jarjar.jpg", "kit.jpg", "mace.jpg", "maul.jpg", "nass.jpg", "obi-wan.jpg", "padme.jpg", "sidious.jpg", "quigon.jpg", "r2-d2.jpg", "shmi.jpg", "super battle droid.jpg", "watto.jpg", "cgi yoda.jpg"];

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
