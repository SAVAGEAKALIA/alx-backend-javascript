class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get [Symbol.toStringTag]() {
    // return 'MyCustomClass';
    return this.name;
  }
}

const obj = new MyClass('Test2', '32');
console.log(Object.prototype.toString.call(obj)); // [object MyCustomClass]
console.log(obj);
const desc = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(desc); // { value: 'Test2', writable: true, enumerable: true, configurable: true }

class Temperature {
  constructor(celsius, them) {
    this.them = them;
    this.celsius = celsius;
  }

  // Define conversion to primitive types using Symbol.toPrimitive
  [Symbol.toPrimitive](hint) {
    if (hint === 'string') {
      return `${this.them}°C`;
    }
    return this.celsius; // Convert to number by default
  }
}

const temp = new Temperature(25, 'glass');
console.log(String(temp)); // Output: The temperature is 25°C
console.log(Number(temp));
// console.log(temp + 5); // Output: 30
// const tem = new Temperature('25');
// console.log(`The temperature is ${tem}`);
// console.log(tem + 5);
