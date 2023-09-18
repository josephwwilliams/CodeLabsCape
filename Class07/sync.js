// function corn() {
//   setTimeout(() => {
//     console.log('corn');
//   }, 3000);
// }
// function apple() {
//   console.log('apple');
// }
// corn();
// apple();

// const apiReq = {
//   success: Math.random() < 0.5,
//   data: 'Eample Data',
// };

// const myData = new Promise((resolve, reject) => {
//   if (apiReq.success) {
//     resolve(apiReq.data);
//   } else {
//     reject(new Error('Failed'));
//   }
// });

// myData
//   .then((done) => console.log('Done: ', done))
//   .catch((error) => {
//     console.log('Error: ', error);
//   });

function getMyDataWithPromise() {
  const data = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log('Error: ', err));
}

getMyDataWithPromise();

async function getMyDataWithAsync() {
  try {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

getMyDataWithAsync();
