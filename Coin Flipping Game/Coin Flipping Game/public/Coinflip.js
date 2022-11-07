document.querySelector('button').addEventListener('click', flip)


function flip(){
const iGot = document.getElementById('iGot')
let random = Math.random();
if (random < 0.5) {
  iGot.innerText = ("Heads");
} else {
  iGot.innerText = ("Tails");
}
}

