// function sumOf(a, b, ...args) {
//   console.log(a, b, args);

//   let sum = 0;
//   sum += a + b;
//   args.forEach((number) => {
//     sum += number;
//   });

//   console.log(sum);
// }

// sumOf(2, 3, 4, 5);

let firstArray = ['Bob', 'Jim'];
let secondArray = ['Tim', 'Jan'];
let wholeArray = [...firstArray, ...secondArray];
console.log(wholeArray);
