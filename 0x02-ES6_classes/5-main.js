import Building from './5-building.js';
// const Building = require('./5-building.js')
// const b = new Building(100);
// console.log(b);

class TestBuilding extends Building {
}

try {
  const tb = new TestBuilding(200);
} catch (err) {
  console.log(err);
}
