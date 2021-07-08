// Creates new <p> el when called
function makeBox() {
  let paraOne = document.createElement("p");
  let divOne = document.createElement("div");

  paraOne.innerText = "Hello!";
  divOne.appendChild(paraOne);

  document.body.appendChild(divOne);
}

// Creates a card element

function makeCard() {
  let sectionOne = document.createElement("section");
  let paraOne = document.createElement("p");
  let imgOne = document.createElement("img");

  imgOne.src =
    "https://gblobscdn.gitbook.com/assets%2F-MBhJa4xpezxI4J9lolG%2F-MGrF6rE0CBWVzznQayq%2F-MGrGfwNRi1D6aKWmg4G%2Fducks2.jpeg?alt=media&token=9dff244b-10e8-4fab-ab68-715e09998ff3";

  paraOne.appendChild(imgOne);
  sectionOne.appendChild(paraOne);
  document.body.appendChild(sectionOne);
}

function makeButton() {
  let cardButton = document.createElement("button");
  let divOne = document.createElement("div");

  cardButton.innerText = "Make Card";
  cardButton.addEventListener("click", makeCard);
  divOne.appendChild(cardButton);
  document.body.appendChild(divOne);
}

makeButton();
