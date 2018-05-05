class Car {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log(this.name);
  }
  static staticFunc() {
    console.log("I am Static");
  }
};

const car = new Car("BMW");
car.logName();
console.log(car.logName === Car.prototype.logName);
Car.staticFunc();
