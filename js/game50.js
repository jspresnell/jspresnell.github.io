// Characters
var pics = ["game1.jpg", "game2.jpg", "game3.jpg", "game4.jpg", "game5.jpg", "game6.jpg", "game7.jpg", "game8.jpg", "game9.jpg", "game10.jpg", "game11.jpg", "game12.jpg", "game13.jpg", "game14.jpg", "game15.jpg", "game16.jpg", "game17.jpg", "game18.jpg", "game19.jpg", "game20.jpg", "game21.jpg", "game22.jpg", "game23.jpg", "game24.jpg", "game25.jpg", "game26.jpg", "game27.jpg", "game28.jpg", "game29.jpg", "game30.jpg", "game31.jpg", "game32.jpg", "game33.jpg", "game34.jpg", "game35.jpg", "game36.jpg", "game37.jpg", "game38.jpg", "game39.jpg", "game40.jpg", "game41.jpg", "game42.jpg", "game43.jpg", "game44.jpg", "game45.jpg", "game46.jpg", "game47.jpg", "game48.jpg", "game49.jpg", "game50.jpg", "game51.jpg", "game52.jpg", "game53.jpg", "game54.jpg", "game55.jpg"];

//My Character
function myCharacter(){
  var myPic = Math.floor(Math.random() * pics.length);

  $("#me").html('<img src="img/' + pics[myPic] + ' ">');

  var name = pics[myPic].substr(0, pics[myPic].lastIndexOf("."))
  name = name.charAt(0).toUpperCase() + name.slice(1);
  //$("#name").html('Your Game');
  //$("#name").html('You are ' + name);
}

myCharacter();


//Question Counter
let data = 20;
 
//printing default value of data that is 0 in h2 tag
document.getElementById("counting").innerText = data;
 
//creation of increment function
function increment() {
    data = data + 1;
    document.getElementById("counting").innerText = data;
}
//creation of decrement function
function decrement() {
    data = data - 1;
	if (data < 0) {
		data=0
	}
    document.getElementById("counting").innerText = data;
}

