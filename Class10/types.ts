let firstName: string = 'Joseph';
let isCoding: boolean = true;
let age: number = 22;

let users: string[] = ['User1'];
let userIds: number[] = [1, 2, 3];

interface Coder {
  firstName: string;
  age: number;
  bootcamp: string | number | boolean;
}

let coder: Coder = {
  firstName: 'Tim',
  age: 24,
  bootcamp: 'Yes',
};

let wrongCoder: Coder = {
  firstName: 'John',
  age: 45,
  bootcamp: false,
};

function add(a: number, b: number): number {
  return a + b;
}

function printName(name: string) {
  console.log(name);
}

function getId<Type>(value: Type): Type {
  return value;
}

let userOneId = getId<String>('1234');
let userTwoId = getId<Number>(34);
let userThreeId = getId<Array<String>>(['Hello']);
