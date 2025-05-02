let randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

let randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

let diceImage1 = document.querySelector(".dice1");
let diceImage2= document.querySelector(".dice2");

// Update the image for both player to their radomnumber
diceImage1.setAttribute("src",`images/dice${randomNumber1}.png`);
diceImage2.setAttribute("src", `images/dice${randomNumber2}.png`);

// determine the winner

if (randomNumber1 > randomNumber2) {
    document.querySelector(".heading").innerText = "Player 1 wins!🏆";
    
} else if (randomNumber1 < randomNumber2) {
    document.querySelector(".heading").innerText = "Player 2 wins!🏆";
    
}
else{
    document.querySelector(".heading").innerHTML = "Draw!🤝";
}