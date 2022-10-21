const moment = require("moment");
const CronJob = require("cron").CronJob;

const a = Date.now();
console.log(a);

const x = moment().format("MM");
const y = moment().format("DD");
console.log(moment().format("DD/MM/YYYY"));
function b() {
  console.log(x);
}
function c() {
  console.log(y);
}

// let time_set = `0 4 1,23 12,3,6,9 *`;
// let time_set = `* * * 21,1,23 10,12,3,6,9 *`; // TEST
let time_set = `* * 17 21,1,23 11,2,5,8 *`; // TEST

let job = new CronJob(
  time_set,
  async function () {
    b();
    c();
  },
  null,
  true,
  "Asia/Bangkok"
);
