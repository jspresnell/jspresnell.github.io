// Characters
var pics = ["bowser.jpg", "captain falcon.jpg", "dk.jpg", "falco.jpg", "fox.jpg", "ganondorf.jpg", "ice climbers.jpg", "jiggly puff.jpg", "kirby.jpg", "link ssb.jpg", "luigi ssb.jpg", "marth.jpg", "mewtwo.jpg", "mr game.jpg", "ness.jpg", "peach ssb.jpg", "pichu.jpg", "pikachu.jpg", "roy.jpg", "samus ssb.jpg", "yoshi.jpg", "young link.jpg", "zelda ssb.jpg", "mario ssb.jpg"];

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
