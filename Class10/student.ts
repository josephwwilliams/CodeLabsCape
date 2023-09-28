class Student {
  // constructor(firstName) {
  //   // this._firstName = firstName
  // }

  constructor(public firstName: string) {}

  sayHello() {
    console.log(this.firstName);
  }
}

const studentOne = new Student('Bob');

studentOne.sayHello();
