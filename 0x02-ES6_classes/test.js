const person = {
  name: 'John',
  password: 'saviour',
  age: 26,
};

const handler = {
  get(target, property) {
    console.log(`Getting property value for ${target[property]}`);
    return target[property];
  },
};

const newPersonProxy = new Proxy(person, handler);
console.log(newPersonProxy); // Getting property value for [object Object]
console.log(person);

const handle = {
  get(target, property) {
    console.log(`Accesing property Value: ${property}`);
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    if (property === 'password') {
      throw new Error('Password is a restricted property');
      return false;
    }
    console.log(`Setting property:${property} Value: ${value}`);
    return Reflect.set(target, property, value);
  },
};

const newPersonProxy1 = new Proxy(person, handle);
console.log(newPersonProxy1);
newPersonProxy1.name = 'Jane';
console.log(newPersonProxy1.name);
// newPersonProxy1.password = 'newPassword'; // Error: Password is a restricted property
// console.log(newPersonProxy1);
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }

  haveBirthday() {
    this.age += 1;
    return `I'm now ${this.age} years old`;
  }
}

const hand = {
  get(target, property) {
    if (typeof target[property] === 'function') {
      return function (...args) {
        console.log(`Calling method ${property} with arguments: ${args}`);
        return target[property].apply(this, args);
      };
    }
    if (property === 'subtract') {
      return function (a, b) {
        return a - b;
      };
    }
    return Reflect.get(target, property);
  },
};

const personProxy = new Proxy(new Person('John', 25), hand);
console.log(personProxy.greet());
console.log(personProxy.haveBirthday());
console.log(personProxy.subtract(5, 3));
console.log(Person.toString());
