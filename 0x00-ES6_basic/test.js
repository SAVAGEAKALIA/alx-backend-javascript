const key = 'dynamicKey';
const obj = {
  [key]: 'value', // The key is computed
};
console.log(obj); // Output: "value"

const yrs = [2021, 2022, 2023, 2024, 2025];
const yeardate = {};

yrs.forEach((yr) => {
  yeardate[`This year-${yr}`] = new Date().toISOString();
});

console.log(yeardate);

const years = [2021, 2022, 2023, 2024, 2025];
const budgets = [3000, 3500, 4000, 4500, 5000];
const total = {};

years.forEach((year, i) => {
  total[`${year}`] = budgets[i];
});

console.log(total);

function Car(bran) {
  this.br = bran; // 'this' refers to the new object being created
}

const myCar = new Car('Toyota');
console.log(myCar.br);
console.log(myCar);

const person1 = { name: 'Alice' };
const person2 = { name: 'Bob' };

function greet() {
  console.log(this.name);
}

greet.call(person1); // Output: "Alice"
greet.call(person2); // Output: "Bob"

const calculator = {
  currentValue: 0,

  add(number) {
    this.currentValue += number;
    return this.currentValue;
  },

  subtract(number) {
    this.currentValue -= number;
    return this.currentValue;
  },

  reset() {
    this.currentValue = 0;
    return this.currentValue;
  },
};
console.log(calculator.add(5));
console.log(calculator.subtract(2));
calculator.reset();

function bmicalculator(w, h) {
  this.weight = w;
  this.height = h;

  return this.weight / (this.height * this.height);
}

const bmi = bmicalculator(65, 1.8);
console.log(bmi);
