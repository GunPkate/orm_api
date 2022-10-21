// const a = () =>
//   setTimeout(() => {
//     console.log("A");
//   }, 2000);
// const b = () =>
//   setTimeout(() => {
//     console.log("B");
//   }, 1000);



// function first(callback) {
//   return new Promise((resolve, reject) => a());
// }

// function second() {
//   return b();
// }

const ab = () => "AB";
const cd = () => "CD";

Promise.all([cd(), ab()]).then((values) => {
  console.log(values);
});

//.then.catch
//promise.all()  // array of promise
//promise.race() // array of promise

//nodemailer npm i nodemailer + attachment
