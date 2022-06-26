// Creating the random rolls of each of the players the value of the roll
let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

// The image selection that goes with the roll
let player1Dice = "./images/dice" + randomNumber1 + ".png";
let player2Dice = "./images/dice" + randomNumber2 + ".png";

// Choose the image of the die that will display based on the random number
document.querySelector(".img1").setAttribute("src", player1Dice);
document.querySelector(".img2").setAttribute("src", player2Dice);

// Changing the h1 to display who wins or if it is draw
if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}