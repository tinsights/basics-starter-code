let button = document.querySelector("#submit-button");
let output = document.querySelector("#output-div");
let input = document.querySelector("#input-field");
button.addEventListener("click", (lambda = () => eval(input.value)));

// global variables
let deck = [];
let playerHand = [];
let dealerHand = [];

// generate a card object with rank/value, suit, and name
function generateCard(rank, suit) {
  let value = rank > 10 ? 10 : rank;
  let name = "";
  // prettier-ignore
  switch (rank) {
    case 1:  name = "Ace"; break;
    case 11: name = "Jack"; break;
    case 12: name = "Queen"; break;
    case 13: name = "King"; break;
    default: name = rank;
  }

  let card = {
    value: value,
    name: name,
    suit: suit,
    title: name + " of " + suit,
  };
  return card;
}

// generate a shuffled standard deck of cards
function generateDeck() {
  const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
  for (let i = 1; i <= 13; i++) {
    for (let j = 0; j < 4; j++) {
      // generates cards and inserts randomly into deck
      deck.splice(Math.floor(Math.random() * deck.length), 0, generateCard(i, suits[j]));
    }
  }
}

// returns the top card of the deck
function deal() {
  return deck.shift();
}
// calculates the score of a player's hand
function score(hand) {
  let total = 0;
  let aces = 0;
  for (i = 0; i < hand.length; i++) {
    if (hand[i].name == "Ace") {
      aces++;
    } else {
      total += hand[i].value;
    }
  }
  // account for all aces last
  while (aces > 0) {
    if (total <= 11 - aces) {
      total += 11;
      aces--;
    } else {
      total++;
      aces--;
    }
  }
  return total;
}

function startGame() {
  toggleOpts();
  output.innerHTML = "Good luck!" + "<br><br>";
  generateDeck();
  playerHand = [deal(), deal()];
  dealerHand = [deal(), deal()];

  let firstDeal = `You have been dealt the <strong>${playerHand[0].title}</strong>
                    and the <strong>${playerHand[1].title}</strong>.
                    <br><br>
                    The dealer's face-up card is the <strong>${dealerHand[0].title}</strong>.
                    <br><br>`;
  output.innerHTML += firstDeal;
  if (score(playerHand) == 21) {
    output.innerHTML += `<strong>Blackjack!</strong> <br>`;
    if (score(dealerHand) == 21) {
      let reveal = `Unfortunately, the dealer reveals the <strong>${dealerHand[1].title}</strong>.`;
      output.innerHTML += "<br><br>" + reveal + "<br><br>";
      output.innerHTML += "<strong>Draw!</strong>";
    } else {
      output.innerHTML += "<strong>You win!</strong>";
    }
    toggleOpts();
  }
}

function hit() {
  card = deal();
  playerHand.push(card);
  let message = `You draw the <strong>${card.title}</strong>. You now have <strong>${score(playerHand)}</strong>.`;
  output.innerHTML += message + "<br><br>";
  if (score(playerHand) > 21) {
    output.innerHTML += `<strong>Too bad!</strong>`;
    toggleOpts();
  }
}

function stand() {
  let reveal = `The dealer reveals the <strong>${dealerHand[1].title}</strong>.
  He has <strong>${score(dealerHand)}</strong>.`;
  output.innerHTML += reveal + "<br><br>";

  while (score(dealerHand) < 17) {
    card = deal();
    dealerHand.push(card);
    let message = `The dealer draws the <strong>${card.title}</strong>. He now has <strong>${score(
      dealerHand
    )}</strong>.`;
    output.innerHTML += message + "<br>";
  }

  if (score(dealerHand) > 21 || score(playerHand) > score(dealerHand)) {
    output.innerHTML += `<br> <strong>You win!</strong>`;
  } else if (score(playerHand) < score(dealerHand)) {
    output.innerHTML += `<br> <strong>You lose!</strong>`;
  } else {
    output.innerHTML += `<br> <strong>Draw!</strong>`;
  }
  toggleOpts();
}

// Ensures options in drop-down menu align to game state
function toggleOpts() {
  input[1].disabled = !input[1].disabled;
  input[2].disabled = !input[2].disabled;
  input[3].disabled = !input[3].disabled;
  input[0].selected = true;
}
