var main = function (input) {
  if (input == "" || Number.isNaN(Number(input))) {
    return "Please enter a valid input";
  }
  let hour = parseInt(input.substring(0, 2));
  const minutes = parseInt(input.substring(2));
  if (hour < 0 || hour > 23 || minutes < 0 || minutes > 59 || Number.isNaN(minutes)) {
    return "Please enter a valid input";
  }
  console.log(hour, minutes);
  hour = hour >= 12 ? hour - 12 : hour;

  let hourHand = (hour / 12) * 360;
  hourHand += (minutes / 60) * 30;
  const minHand = (minutes / 60) * 360;

  const diff = Math.abs(hourHand - minHand);
  if (diff === 0) {
    return "Same angle!";
  }
  const position = minHand > hourHand ? "after" : "before";

  const message = `The hour hand is at ${hourHand}&#176 and the minute hand is at ${minHand}&#176. The minute hand is ${diff}&#176 ${position} the hour hand.`;
  return message;
};

function loanCalc(principal) {
  if (principal == "" || Number.isNaN(Number(principal))) {
    return "Please enter a valid input";
  }
  const monthlyRate = 0.03 / 12;
  const term = 10;
  let months = term * 12;

  let geometricFactor = Math.pow(1 + monthlyRate, months);

  let monthlyPayments = (monthlyRate * principal * geometricFactor) / (geometricFactor - 1);

  let total = monthlyPayments * months;
  let interestPaid = total - principal;

  let message = `1. You will be paying \$${monthlyPayments.toFixed(2)} every month. <br>
  2. You will have paid a total of \$${total.toFixed(2)} at the end of 10 years. 
  <br>
  3. You will have paid a sum of \$${interestPaid.toFixed(2)} in interest alone.
  <br>`;

  return message;
}
