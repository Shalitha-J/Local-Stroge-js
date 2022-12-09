let text = document.querySelector('.value');


let initiate = localStorage.getItem('myNumber')
console.log(initiate)
text.innerHTML = initiate
let resetNumber = 0;
localStorage.setItem('myNumber', resetNumber)