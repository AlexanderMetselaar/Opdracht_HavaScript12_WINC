var playerName = prompt("Welkom! Wat is je naam?");
alert("Hey, " + playerName);

const winningNumber = Math.floor(Math.random() * 25);

var getNumber = prompt(playerName + "!" + " Geef een getal tussen 0 en 25 om verder te gaan.");

for(i=1; getNumber != winningNumber && i < 5; i++) {
    console.log("Het gekozen nummer is niet juist");
    console.log("Je hebt nog " + (5-i) + "kansen.")
    var number = prompt("Voer een nummer in van 0 tot 25");
};

if(number !== winningNumber) {
    console.log("Game Over ...")
} else {
    console.log("Gefeliciteerd! Je hebt het goed geraden")
};

console.log("Tot ziens" + playerName + " tot een volgende keer!")

