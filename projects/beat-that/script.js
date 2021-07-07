let button = document.querySelector("#roll-dice");
let output = document.querySelector("#output-div");

// set dimensions for future variable-dimension versions
const DICE_DIMENSIONS = 6;

button.addEventListener("click", function () {
  const numDice = diceInput.value;
  const numPlayers = playerInput.value;
  if (numDice == "" || numPlayers == "") {
    alert("Please fill in both fields!");
    return;
  }
  output.innerHTML = `The ${numPlayers} of you will be rolling ${numDice} dice each. Good luck! <br><br>`;

  main(numPlayers, numDice);
});

// rolls as many dice as selected, returns array of roll results
function rollDice(numDice) {
  diceRolls = [];
  for (let i = 0; i < numDice; i++) {
    let diceRoll = Math.floor(Math.random() * DICE_DIMENSIONS) + 1;
    diceRolls.push(diceRoll);
  }
  output.innerHTML += `You rolled a `;

  for (let j = 0; j < numDice; j++) {
    output.innerHTML += `<strong>${diceRolls[j]}</strong> for Dice ${j + 1}`;
    // prettier-ignore
    switch (j) {
        case (numDice - 1): output.innerHTML += ".<br>"; break;
        case (numDice - 2): output.innerHTML += " and a "; break;
        default:            output.innerHTML += ", a "; break;
      }
  }
  return diceRolls;
}

function highestNumber(diceRolls) {
  let highestNumber = "";
  for (let i = 0; i < diceRolls.length; i++) {
    highestNumber += diceRolls[i].toString();
  }
  output.innerHTML += `Your number is <strong>${highestNumber}</strong>. <br><br>`;
  highestNumber = parseInt(highestNumber);
  return highestNumber;
}

function main(numPlayers, numDice) {
  let results = [];
  let diceRolls = [];
  let tie = false;
  let currentHighest = 0;
  for (let i = 0; i < numPlayers; i++) {
    output.innerHTML += `Welcome, Player ${i + 1}. <br>`;
    diceRolls = rollDice(numDice);

    diceRolls.sort((a, b) => b - a);
    let combination = highestNumber(diceRolls);
    if (combination > currentHighest) {
      currentHighest = combination;
      tie = false;
    } else if (combination == currentHighest) {
      tie = true;
    }
    results.push(combination);
  }

  if (tie) {
    output.innerHTML += "<strong>A tie!</strong> What are the odds of that?? <br>";
  } else {
    let winner = results.indexOf(currentHighest) + 1;
    output.innerHTML += `The winner is <strong>Player ${winner}!</strong> <br>`;
  }
}
