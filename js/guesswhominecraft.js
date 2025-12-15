// Characters
var pics = ["alexmc.jpg", "arimc.jpg", "beemc.jpg", "chickenjockeymc.jpg", "cowmc.jpg", "creepermc.jpg", "enderdragonmc.jpg", "endermanmc.jpg", "ghastmc.jpg", "ocelotmc.jpg", "parrotmc.jpg", "pigmc.jpg", "pillagermc.jpg", "sheepmc.jpg", "skeletonmc.jpg", "spidermc.jpg", "stevemc.jpg", "sunnymc.jpg", "villagermc.jpg", "witchmc.jpg", "wolfmc.jpg", "zombiemc.jpg", "zombiepiglinmc.jpg", "chickenmc.jpg"];

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
