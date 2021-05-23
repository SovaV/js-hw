const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];
console.log(products);

function getProductPrice(productName) {
  const totalPrice = [];
  for (const product of productName) {
    // console.log(product.name);
    // console.log(product.price);
    totalPrice.push(product.price);
    if (product.name) {
      const full = product === price;
      console.log(full);
    }
  }
  return totalPrice;
}
console.log(getProductPrice(products));
