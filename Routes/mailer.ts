import nodemailer from 'nodemailer'
import express,{Router,Request,Response} from 'express'

const router:Router = express.Router();
router.post('/mail',async(req:Request,res:Response)=>{
  
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: "gundash1@gmail.com",
            pass: "jyztxzmaptdfpsie"
        }
        // auth: {
        //     "user": "edvisory.test.mail@gmail.com",
        //     "pass": "A#8d@3mn"
        // }
    })

    const {from,to, subject, text} = req.body;
        console.log(req.body);
    const optons = {
        from : from,
        to: to ,
        subject:subject, 
        text: text
    }

    transporter.sendMail(optons,(err,info)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("send: "+info.response) 
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.send(info)
    })
})


// async..await is not allowed in global scope, must use a wrapper
// async function main() {
//   // Generate test SMTP service account from ethereal.email
//   // Only needed if you don't have a real mail account for testing
//   let testAccount = await nodemailer.createTestAccount();

//   // create reusable transporter object using the default SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
// {
//     "user": "edvisory.test.mail@gmail.com",
//     "pass": "A#8d@3mn"
// }
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
//   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//   // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

export default router;