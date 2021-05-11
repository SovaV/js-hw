function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
  /// Change code above this line
  return result;
}