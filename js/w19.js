const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  const category = [];
  for (const product of products) {
    if (product.hasOwnProperty(propName)) {
      category.push(product.price);
      console.log(category);
    }
  }
  return category;
}
console.log(getAllPropValues(products));
