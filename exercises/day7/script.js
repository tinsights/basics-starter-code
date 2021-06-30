let button = document.querySelector("#submit-button");
let input = document.querySelector("#input-field");
let output = document.querySelector("#output-div");

let adjectives = [];
let nouns = ["Tree Car"];
let exclamations = ["Yabadabadoo!"];
let adverbs = ["gleefully"];

function randWord(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function randomExclamation() {
  return randWord(exclamations);
}
function randomAdverb() {
  return randWord(adverbs);
}
function randomNoun() {
  return randWord(nouns);
}
function randomAdj() {
  return randWord(adjectives);
}

button.addEventListener("click", function () {
  if (input.value !== "") {
    inputAdjectives = input.value.trim().split(" ");
    for (let i = 0; i < inputAdjectives.length; i++) {
      adjectives.push(inputAdjectives[i]);
    }
  } else if (adjectives.length == 0) {
    alert("Please enter at least one adjective!");
    return;
  }

  let madLib = `<strong>"${randomExclamation()}"</strong> he said <strong>${randomAdverb()}</strong> as he jumped into his convertible <strong>${randomNoun()}</strong> and drove off with his <strong>${randomAdj()}</strong> wife.`;
  console.log(madLib);
  output.innerHTML += madLib;
  output.innerHTML += "<br><br>";
  input.value = "";
});

// gorgeous charming sexy tenacious
