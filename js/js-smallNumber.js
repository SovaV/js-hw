// ========== ШУКАЄ НАЙМЕНШЕ ЧИСЛО

const numbers = [12, 45, 67, 234, 657, 456, 3, 56, 7, 834, 5];
let smallestNumber = numbers[0];

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log('smallestNumber: ', smallestNumber);
