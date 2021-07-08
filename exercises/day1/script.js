// Pre-class
var main = function (input) {
  let miles = input / 1.6;
  var myOutputValue = `${input} kilometers is ${miles} mile(s).`;
  return myOutputValue;
};

// In class
var minutesInWeeks = function (input) {
  let minutes = input * 7 * 24 * 60;
  var myOutputValue = `In ${input} week(s) there are ${minutes} minutes!`;
  return myOutputValue;
};

var farenToCel = function (input) {
  let celsius = (5 / 9) * (input - 32);
  var myOutputValue = `${input} &#176F is ${celsius.toFixed(2)}&#176C.`;
  return myOutputValue;
};

var roadTripCost = function (input) {
  let cost = (input / 9) * 2.2;
  // prettier-ignore
  var myOutputValue = `A ${input}km trip would cost approximately \$${cost.toFixed(2)}.`;
  return myOutputValue;
};

var iceCreamBuffet = function (input) {
  let containers = (input * 70) / 400;
  // prettier-ignore
  var myOutputValue = `In ${input} trips you would have consumed ${containers.toFixed(2)} containers of ice cream. Wow!`;
  return myOutputValue;
};

function timeToType(input) {
  let time = 17677 / input / 60;

  if (input == "" || Number.isNaN(Number(input))) {
    return "Please enter a valid input";
  }
  // prettier-ignore
  var myOutputValue = `Typing at ${input} words per minute, you will take ${time.toFixed(2)} hours to complete typing all of Shakespeare's sonnets!`;
  return myOutputValue;
}
