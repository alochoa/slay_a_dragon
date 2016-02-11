var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

var myFunction = function() {
  while(slaying) {
      if (youHit === 1) {
          document.getElementById("action").innerHTML = "You hit dragon";
          // return "You hit dragon";
          totalDamage += damageThisRound;
          if (totalDamage >= 4) {
              document.getElementById("winner").innerHTML = "Player wins";
              // return "player wins";
              slaying = false;
          }
          else {
              Math.floor(Math.random() * 2);
          }
      }
      else {
          document.getElementById("winner").innerHTML = "Dragon defeats you";
          // return "dragon defeats you";
          slaying = false;
      }
      document.getElementById("hit").innerHTML = totalDamage;
  }
}

// document.getElementById("hit").innerHTML = totalDamage;
// window.onload = myFunction();
// document.getElementById("demo").innerHTML = myFunction();
