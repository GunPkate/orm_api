import { Exercise } from './../Entities/exercise';
import nodemailer from 'nodemailer'
import express,{Router,Request,Response} from 'express'
import path from 'path';
const file:string = "exercise.csv"
// const attachment = path.resolve(__dirname,"attach",file);
const attachment = 'attach/exercise.csv';

const router:Router = express.Router();
router.post('/mail',async(req:Request,res:Response)=>{
    console.log(req.body);
    // const transporter = nodemailer.createTransport({
    //     service:"gmail",
    //     auth:{
    //         user: "gundash1@gmail.com",
    //         pass: "jyztxzmaptdfpsie"
    //     }
    //     // auth: {
    //     //     "user": "edvisory.test.mail@gmail.com",
    //     //     "pass": "A#8d@3mn"
    //     // }
    // })

    // const {from,to, subject, text} = req.body;
    //     console.log(req.body);
    // const optons = {
    //     from : from,
    //     to: to ,
    //     subject:subject, 
    //     text: text,
    //     attachments: [
    //         {
    //             filename: file,
    //             path: attachment
    //         }
    //     ]
    // }

    // transporter.sendMail(optons,(err,info)=>{
    //     if(err){
    //         console.log(err);
    //         return;
    //     }
    //     console.log("send: "+info.response) 
    //     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    //     res.send(info)
    // })
})

export default router;