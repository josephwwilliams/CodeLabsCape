// Observer Pattern Demo Start \\
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((sub) => sub !== fn);
  }

  broadcast(data) {
    this.observers.forEach((sub) => sub(data));
  }
}

// Usage:
// const getWordCount = (text) => (text ? text.trim().split(/\s+/).length : 0);

function getWordCount(text) {
  return text ? text.trim().split(/\s+/).length : 0;
}

const wordCountElement = document.createElement('p');

wordCountElement.className = 'wordCount';
wordCountElement.innerHTML =
  'Word Count: <strong id="blogWordCount">0</strong>';
document.body.appendChild(wordCountElement);

const blogObserver = new EventObserver();

blogObserver.subscribe((text) => {
  const blogCount = document.getElementById('blogWordCount');

  blogCount.textContent = getWordCount(text);
});

blogObserver.subscribe((text) => {
  console.log(text);
});

const blogPost = document.getElementById('blogPost');

blogPost.addEventListener('keyup', () =>
  blogObserver.broadcast(blogPost.value),
);
// Observer Pattern Demo End \\

// class EventObserver {
//   constructor() {
//     this._observers = [];
//   }

//   subscribe(fn) {
//     this._observers.push(fn);
//   }

//   unsubscribe(fn) {
//     this._observers.filter((subscription) => {
//       subscription !== fn;
//     });
//   }

//   broadcast(data) {
//     this._observers.forEach((subscription) => {
//       subscription(data);
//     });
//   }
// }

// const fakeObserver = new EventObserver();
// fakeObserver.subscribe((data) => {
//   console.log(data)
// });
// fakeObserver.subscribe((data) => {
//   console.log(data.toUpperCase());
// });

// fakeObserver.broadcast('Joseph');
