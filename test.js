const a = () =>
  setTimeout(() => {
    console.log("A");
  }, 2000);
const b = () =>
  setTimeout(() => {
    console.log("B");
  }, 1000);

function first(callback) {
  return new Promise((resolve, reject) => a());
}

function second() {
  return b();
}

first().then(second());
