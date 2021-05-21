// ========== ШУКАЄ НАЙБІЛЬШЕ ЧИСЛО

const numbers = [12, 45, 67, 234, 657, 456, 3, 56, 7, 834, 5];
let biggestNumber = numbers[0];

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}
console.log('biggestNumber: ', biggestNumber);
