var lotto = [];
var lottoNumbers = "";
var lottoSize;

function start() {
  lottoSize = prompt("How many lottery numbers would you like?");
  while (!(lottoSize <= 8 && lottoSize  >= 1)) {
    lottoSize = prompt("Try a number between 1 and 8");
  }
  document.getElementById("buttonStart").className = "hide";
  document.getElementById("numbersAre").className = "show";
  generateNumbers();
}

function generateNumbers() {
  if (lottoSize == undefined) {
    alert("Press start first");
  } else {
    lotto = [];
    for (i = 0; i < lottoSize; i++) {
      lotto[i] = Math.ceil(Math.random() * 99);
      if(i == 0){
        lottoNumbers = lotto[i];
      }
      else{
        lottoNumbers += " - " + lotto[i];
      }
    }
    document.getElementById("numbers").innerHTML = lottoNumbers;
    document.getElementById("size").innerHTML = lottoSize;
  }
}

function increaseSize() {
  if (lottoSize == undefined) {
    alert("Press start first");
  } else if (lottoSize < 8) {
    lottoSize++;
    generateNumbers()
  } else {
    alert("Cannot go any higher!");
  }
}
function decreaseSize() {
  if (lottoSize == undefined) {
    alert("Press start first");
  } else if (lottoSize > 1) {
    lottoSize--;
    generateNumbers()
  } else {
    alert("Cannot go any lower!");
  }
}
