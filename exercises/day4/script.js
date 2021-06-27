let winCount = 0;
let lastGuess = 0;

var main = function (input) {
  const secrets = ["banana", "chisel", "faucet"];
  let message = "";
  let word = secrets[Math.floor(Math.random() * 3)];
  if (word !== input) {
    winCount = 0;
    message = `You guessed ${input}, but my secret word was <strong><em>${word}</em></strong>! Too bad!`;
  } else if (winCount == 0) {
    winCount++;
    message = `No way you knew that my secret word was <strong><em>${input}</em></strong>, that was a lucky guess! Let's see if you can do it again.`;
  } else {
    message = `${input}! Maybe you really do have psychic powers. You win!`;
  }
  let dropDown = document.getElementById("input-field");
  dropDown[lastGuess].disabled = lastGuess == 0 ? true : false;
  lastGuess = document.getElementById("input-field").options.selectedIndex;
  dropDown[lastGuess].disabled = true;
  console.log(lastGuess);
  return message;
};
