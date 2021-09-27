let clicking = document.querySelector('span');
var flip;

function clickme() {
  flip = Math.round(Math.random());
  if (flip == 1) {
    clicking.innerText = "head";
  } else {
    clicking.innerText = "tail";
  }

}