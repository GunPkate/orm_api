const moment = require("moment");
const CronJob = require("cron").CronJob;

const a = Date.now();
console.log(a);

const x = moment().format("MM");
const y = moment().format("DD");
console.log(moment().format("DD/MM/YYYY"));
function b() {
  let num = 0;
  x == "03" || "12" ? (num = 24) : (num = 23);
  console.log(num, x);
}
function c() {
  console.log(y);
}

// b()
// let time_set = `* * * * * *`;
// let time_set = `* * * 22,1,${num} 11,2,5,8,9 *`; // TEST
let num = 0;
x == "03" || "12" ? (num = 24) : x == "06" || "09" ? (num = 23) : (num = 1);
let time_set = `* * * 1,${num} 11,2,5,8,9 *`; // TEST
console.log(time_set);
// let job = new CronJob(
//   time_set,
//   async function () {
//     b();
//     c();
//   },
//   null,
//   true,
//   "Asia/Bangkok"
// );
