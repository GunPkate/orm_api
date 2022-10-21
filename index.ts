import express,{ Application,Request,Response } from "express";
import intern_dataSource from "./Mysql/intern";
import local_dataSource from "./Mysql/local";
import user from "./Routes/user";
import mailer from "./Routes/mailer"
import cron = require('cron')
const cronjob = cron.CronJob
import Handlebars from "handlebars"
import moment from 'moment'

const port:Number = 3000;
const app:Application = express();
app.use(express.json());

// local_dataSource.initialize()
// intern_dataSource.initialize()
// app.get('/',(req:Request,res:Response)=>res.send("Hello123"))

// app.use('/api/user',user)
app.use('/api/mailer',mailer)

var job = new cronjob(
	'* * * * * *',
	async function() {
		test()
        await app.use('/api/mailer',mailer)
	},
	null,
	true,
	'America/Los_Angeles'
);

function test():void {
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
console.log(result,moment().format("DD-MM-YYYY hh:mm:ss"));
}
app.listen(port,()=>console.log(`start server port: ${port}`))