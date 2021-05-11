function checkForSpam(message) {
  // Change code below this line
message = message.toLowerCase();
  let result;
  result = message.includes("spam") || message.includes("sale");
  // Change code above this line
  return result;
}