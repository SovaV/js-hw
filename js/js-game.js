'use strict';

// ========= ШУКАЄМ ЧИСЛО =========
const secretNumber = Math.round(Math.random() * 100 + 1);
// console.log(secretNumber);

let userNumber;
do {
  const userAnswer = prompt('Enter a number');
  userNumber = Number.parseInt(userAnswer);
  console.log('userNumber:', userNumber);
  if (secretNumber === userNumber) {
    console.log('You won!');
  } else if (secretNumber > userNumber) {
    console.log('x >', userNumber);
  } else if (secretNumber < userNumber) {
    console.log('x <', userNumber);
  } else {
    console.log('exit');
  }
} while (secretNumber !== userNumber && !isNaN(userNumber));
