const cron = require("cron").CronJob;
const Handlebars = require("handlebars");
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

// var job = new cron(
//   "* * * * * *",
//   function () {
//     Promise.all([cd(), ab()]).then((values) => {
//       console.log(values);
//     });
//   },
//   null,
//   true,
//   "America/Los_Angeles"
// );

var source =
  "<p>เรียน {{name}}" +
  "{{name}} สามารถเข้าระบบ เพื่อรายงานผลตัวชี้วัด และ ในไตรมาสที่ 1 ประจำปีงบประมาณ 2565 ภายในวันที่ 1 ธันวาคม พ.ศ. 2565 ถึงวันที่ 31 ธันวาคม พ.ศ. 2565" +
  "จึงเรียนมาเพื่อทราบ" +
  "งานฝ่ายแผนและงบประมาณ" +
  "ข้อมูลการติดต่อ" +
  "{{emp_name}}" +
  "โทร.{{tel}}" +
  "Email:" +
  "<ul>{{#emails}} <li>{{name}}</li>{{/emails}} </ul>";
var template = Handlebars.compile(source);

var data = {
  name: "วิทยาการคอมพิวเตอร์",
  emp_name: "สมชาย เอ",
  tel: "0821114544",
  emails: [{ name: "g1@gmail.com" }, { name: "a1@gmail.com" }],
};
var result = template(data);
console.log(result);
//.then.catch
//promise.all()  // array of promise
//promise.race() // array of promise
