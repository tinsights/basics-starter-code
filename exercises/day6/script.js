let button = document.querySelector("#submit-button");
let input = document.querySelector("#input-field");
let output = document.querySelector("#output-div");
let select = document.querySelector("#guess");

// set dimensions for future variable-dimension versions
const DICE_DIMENSIONS = 6;
const ROUNDS = 4;
const PLAYERS = 1;

let numDice = 0;
let guess = 0;

button.addEventListener("click", function () {
  // Get number of dice, and guess value
  numDice = Math.round(Number(input.value));
  guess = Number(select.value);

  // console.log(numDice + " || " + guess);
  // Input validation
  if (Number.isNaN(numDice) || numDice == 0) {
    alert("Please input a valid number!");
    return 1;
  }
  if (guess == 0) {
    alert("Please make a guess!");
    return 2;
  }

  main();

  // Reset input value
  input.value = "";
  select[0].selected = true;
});

// rolls as many dice as selected by player, returns array of roll results
function rollDice() {
  diceRolls = [];
  for (let i = 0; i < numDice; i++) {
    let diceRoll = Math.floor(Math.random() * DICE_DIMENSIONS) + 1;
    diceRolls.push(diceRoll);
  }
  return diceRolls;
}

function main() {
  output.innerHTML = `You will be rolling ${numDice} dice, for ${ROUNDS} rounds.<br>You will win a round if any dice come up ${guess} that round.<br>
  Let's see how lucky you are!<br>`;

  // runs the game for selected number of rounds
  for (let i = 0; i < ROUNDS; i++) {
    output.innerHTML += `<br>Round ${i + 1}!<br>`;
    let winCondition = false;
    let diceRolls = rollDice(numDice);
    output.innerHTML += "You rolled a ";
    for (let i = 0; i < diceRolls.length; i++) {
      output.innerHTML += `${diceRolls[i]}, `;
      winCondition = winCondition || guess == diceRolls[i];
    }
    output.innerHTML += winCondition ? "you've won!<br>" : "oh well!<br>";
  }
}
