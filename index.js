class Car {
  constructor(name) {
    console.log("Class constructor");
    this.name = name;
  }
  logName() {
    console.log("Car name is: ", this.name);
  }
}

class BMW extends Car {
  constructor(name) {
    super(name);
    console.log("BMW constructor");
  }
  logName() {
    super.logName();
  }
}

const bmw = new BMW("X6");
bmw.logName();
