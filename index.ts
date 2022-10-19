import express,{ Application,Request,Response } from "express";
import intern_dataSource from "./Mysql/intern";
import local_dataSource from "./Mysql/local";

const port:Number = 3000;
const app:Application = express();

local_dataSource.initialize()
// intern_dataSource.initialize()
app.get('/',(req:Request,res:Response)=>res.send("Hello123"))

app.listen(port,()=>console.log(`start server port: ${port}`))