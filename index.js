var image = ["dice1.png" , "dice2.png" , "dice3.png" , "dice4.png" , "dice5.png" , "dice6.png"]



var randomNumber1 = Math.random();
var m = Math.floor((randomNumber1*image.length));
document.querySelector(" .dice-first img").setAttribute("src",image[m]);

var randomNumber2 = Math.random();
var n = Math.floor((randomNumber2*image.length));
document.querySelector(" .dice-second img").setAttribute("src",image[n]);

if(m > n){
    document.querySelector(".container h1").textContent = "player 1 win";
}else if(m === n){
    document.querySelector(".container h1").textContent = "draw ";
}else{
    document.querySelector(".container h1").textContent = "player 2 win";
    
}
