function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 1) {
      number = i;
      console.log(number);
    }
  }
  console.log();

  return number;
}
findNumber(2, 7, 5);
