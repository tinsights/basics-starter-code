var main = function (input) {
  let hour = parseInt(input.substring(0, 2));
  const minutes = parseInt(input.substring(2));
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
