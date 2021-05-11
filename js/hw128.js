function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line

switch (password) {
  case password === null:
    message = "Canceled by user!";
    break;

  case password === ADMIN_PASSWORD:
     message = "Welcome!";
    break;

  default:
   message = "Access denied, wrong password!";
}

  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  // Change code above this line
  return message;
}
