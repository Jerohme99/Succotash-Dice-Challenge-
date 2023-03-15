
    var diceNumber= Math.floor((Math.random()*6)
    +1);
    var diceface= "images/dice"+diceNumber+".png"

var player1 = document.querySelectorAll("img")[0].setAttribute("src",diceface);

var diceNumber2= Math.floor((Math.random()*6)
    +1);
    var diceface2= "images/dice"+diceNumber2+".png"
var player2 = document.querySelectorAll("img")[1].setAttribute("src",diceface2);

if (diceNumber>diceNumber2) {
    document.querySelector("h1").textContent="✔Player 1 Wins"
}
else if (diceNumber<diceNumber2) {
    document.querySelector("h1").textContent="Player 2 Wins✔"
}
else {
    document.querySelector("h1").textContent="Draw"
}