// var audio = document.querySelector(".crash");
var soundTypes = document.querySelectorAll(".drum").length;
for (var i = 0; i < soundTypes; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var drumButton = this.innerHTML;
    // console.log(drumButton);
    playSound(drumButton);
  });
}

document.addEventListener("keypress", function(event) {
  playSound(event.key);
  // playSound(this.innerHTML);
});

function playSound(letter) {
  keyAnimation(letter);
  switch (letter) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

  }
}

function keyAnimation(key){
  document.querySelector("." + key).classList.add("shadow");
  setTimeout(function(){
    document.querySelector("." + key).classList.remove("shadow");
  }, 200);
}
