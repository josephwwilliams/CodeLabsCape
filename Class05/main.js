// function greeting(name) {
//   let greet = `Hello ${name}`;
//   // let greet = 'Hello ' + name;

//   console.log(greet);
// }

// greeting('Class');

// const person = {
//   name: 'Jospeh',
// };

// person.name = 'John';

// console.log(person);

// const firstName = 'Joseph';

// function sayHello() {}

// let ageOfTom = 10,
//   ageOfJim = 20,
//   ageOfBob = 90;

// let firstName;

// function greetBob() {
//   let firstName = 'Bob';
//   console.log('Before: ', firstName);
// }

// greetBob();

// console.log('After: ', firstName);

// let isBilly = false;

// function isNameBilly(name) {
//   if (name === 'Billy') {
//     isBilly = true;
//   }
//   console.log('Are you billy? ' + isBilly);
// }

// isNameBilly('Billy');

// let randomVariable;

// function checkIfHoisted() {
//   let randomVariable = 10;
//   console.log('Inside', randomVariable);
// }

// checkIfHoisted();

// console.log('after', randomVariable);

// function typeOfGreeting(name) {
//   return function loudGreeting() {
//     return `Hello ${name}!`;
//   };
// }

// function sayHello(name) {
//   let capitalizedWord = capitalizeWord(name);
//   console.log(capitalizedWord);
// }

// function capitalizeWord(word) {
//   return word.toUpperCase();
// }

// sayHello('billy');

// function bankAccount(initialBalance) {
//   let userBalance = initialBalance;

//   function getBalance() {
//     return userBalance;
//   }

//   function deposit(depositAmount) {
//     userBalance += depositAmount; // userBalance = userBalance + depositAmount
//     return userBalance;
//   }

//   function withdraw(withdrawAmount) {
//     userBalance -= withdrawAmount;
//     return userBalance;
//   }

//   let userInterface = {
//     getBalance: getBalance,
//     deposit: deposit,
//     withdraw: withdraw,
//   };

//   return userInterface;
// }

// const account = bankAccount(130);
// account.deposit(40);
// account.deposit(50);
// account.withdraw(240);
// console.log('Account: ', account.getBalance());

// const jimAccount = bankAccount(50);
// jimAccount.deposit(35);
// console.log("Jim's Account:", jimAccount.getBalance());

// const createAccount = (initialBalance) => {
//   let userBalance = initialBalance;

//   let userInterface = {
//     getBalance: () => {
//       return userBalance;
//     },
//     deposit: (ammount) => {
//       userBalance += ammount;
//       return userBalance;
//     },
//     withdraw: (withdraw) => {
//       userBalance -= withdraw;
//       return userBalance;
//     },
//   };

//   return userInterface;
// };

// const bobAccount = createAccount(30);

// bobAccount.deposit(60);
// let bobBalance = bobAccount.getBalance();
// console.log(bobBalance);

// mainFunction();

// function mainFunction() {
//   console.log('Hello');
// }

// mainFunction();

// function sayBalance(balance) {
//   let initialBalance = balance;
//   return function getBalance() {
//     return initialBalance;
//   };
// }

// const getBalance = sayBalance(300);
// console.log(getBalance());

// let firstName = 'Joseph';

// function changeNameGlobal() {
//   firstName = 'Bob';
//   console.log('Global', firstName);
// }

// function changeNameLocal() {
//   let firstName = 'Charlie';
//   console.log('Local', firstName);
// }

// changeNameGlobal();
// changeNameLocal();

// function functionFactory(job) {
//   return function capitalizeJobName() {
//     return job.toUpperCase();
//   };
// }

// let jobCapitalizeFactory = functionFactory('software developer');
// console.log(jobCapitalizeFactory());

// console.log(firstName);
// let firstName = 'Joseph';

// function setupCounter() {
//   let counterTick = 0;

//   return function () {
//     counterTick++;
//     console.log(counterTick);
//   };
// }

// const tickCounter = setupCounter();
// for (let index = 0; index < 60; index++) {
//   tickCounter();
// }

function setupCounterFunction() {
  let tick = 0;

  return function () {
    tick++;
    if (tick > 10) {
      tick = 0;
    }
    console.log(tick);
  };
}

const counterTick = setupCounterFunction();

for (let index = 0; index < 30; index++) {
  counterTick();
}
