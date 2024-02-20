const productCatalog = [
  { name: 'grill', price: 10000 },
  { name: 'telephone', price: 30000 },
  { name: 'glasses', price: 4000 },
  { name: 'laptop', price: 50000 },
  { name: 'cactus', price: 500 },
];

const updatedPrices = (object) => {
  const discount = object.map((obj) => ({ ...obj, price: obj.price * 0.9 }));

  return discount;
};
const newPrice = updatedPrices(productCatalog);
console.log(newPrice);
// ____________________________________________

const students = [
  { name: 'Viktor', grade: 100 },
  { name: 'Kira', grade: 65 },
  { name: 'Nikita', grade: 54 },
  { name: 'Alex', grade: 95 },
];

const getEstimate = (array) => {
  const result = array.filter((object) => object.grade > 90);

  return result;
};

const newStudentsGrade = getEstimate(students);
console.log(newStudentsGrade);
