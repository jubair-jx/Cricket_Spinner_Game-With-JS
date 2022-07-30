let container = document.querySelector('.container');
let btn = document.getElementById('spin');
let number = Math.floor(Math.random()*1500);

btn.onclick = function(){
    container.style.transform = "rotate("+ number +"deg)";
    number += Math.floor(Math.random()*1500)
}