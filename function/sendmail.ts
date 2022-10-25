import nodemailer from "nodemailer";
import formEmailKPI from "../Controller/formEmailKPI";
// const file: string = "exercise.csv";
// const attachment = path.resolve(__dirname,"attach",file);
// const attachment = "attach/exercise.csv";

async function sendEmail(body: any): Promise<any> {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gundash1@gmail.com",
        pass: "jyztxzmaptdfpsie",
      },
      // auth: {
      //     "user": "edvisory.test.mail@gmail.com",
      //     "pass": "A#8d@3mn"
      // }
    });

    const { from, to, subject, text, file, attachment } = body;
    console.log(body);
    const optons = {
      from: from,
      to: to,
      subject: formEmailKPI(body.department)[0],
      text: formEmailKPI(body.department)[1],
      attachments: [
        {
          filename: file,
          path: attachment,
        },
      ],
    };

    const info = await transporter.sendMail(optons);
    console.log(info);
    return info;
  } catch (error) {
    console.log(error);
  }

  //   transporter.sendMail(optons, (err, info) => {
  // if (err) {
  //   console.log(err);
  //   return;
  // }
  // console.log("send: " + info.response);
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // return info;
  //   });
}

export { sendEmail };
