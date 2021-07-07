// let name = "";
// do {
//   name = window.prompt("What's your name?");
// } while (name == null || name == "");
// window.alert("Hello, " + name + ". Pick scissors, paper or stone!");
let score = { you: 0, computer: 0 };

let main = function (input) {
  if (input == "") {
    return "Choose a weapon!";
  }
  let options = ["scissors", "paper", "stone"];
  let enemy = options[Math.floor(Math.random() * 3)];
  let result;
  if (input == enemy) {
    result = "Draw!";
  } else if (
    (input == "scissors" && enemy == "stone") ||
    (input == "paper" && enemy == "scissors") ||
    (input == "stone" && enemy == "paper")
  ) {
    result = "You lose!";
    score.you++;
  } else {
    result = "You win!";
    score.computer++;
  }
  message = `The computer chose ${enemy}! <br><br> You chose ${input}. <br><br> ${result} The score is now ${score.computer} - ${score.you}`;
  return message;
};
