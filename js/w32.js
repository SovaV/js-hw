function addOverNum(...args) {
  let total = 0;

  for (const arg of args) {
    const sum = (arg) => arg["0"];
    console.log(sum);
    total += sum;
  }

  return total;
  // Change code above this line
}

addOverNum(50, 15, 27);
addOverNum(10, 12, 4, 11, 48, 10, 8);
addOverNum(15, 32, 6, 13, 19, 8);
addOverNum(20, 74, 11, 62, 46, 12, 36);
