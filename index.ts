import express,{ Application,Request,Response } from "express";
import intern_dataSource from "./Mysql/intern";
import local_dataSource from "./Mysql/local";
import user from "./Routes/user";
import mailer from "./Routes/mailer"
import cron = require('cron')
const cronjob = cron.CronJob
import test from "./Controller/emailController";

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
		// test()
        await app.use('/api/mailer',mailer)
	},
	null,
	true,
	'America/Los_Angeles'
);

app.listen(port,()=>console.log(`start server port: ${port}`))