import moment from "moment";
import Handlebars from "handlebars"

function test():Array<string> {
    var data = {
        name: "วิทยาการคอมพิวเตอร์",
        emp_name: "สมชาย เอ",
        tel: "0821114544",
        emails: [{ name: "g1@gmail.com" }, { name: "a1@gmail.com" }],
        subject: "แจ้งกำหนดการรายงานผลตัวชี้วัด SDA และ KPI ประจำปีงบประมาณ 2565 สำหรับหน่วยงานหรือภาควิชา"
    };
    
    var source =
      `
      {{subject}}

      เรียน {{name}}

      {{name}} สามารถเข้าระบบ เพื่อรายงานผลตัวชี้วัด และ ในไตรมาสที่ 1 ประจำปีงบประมาณ 2565 ภายในวันที่ 1 ธันวาคม พ.ศ. 2565 ถึงวันที่ 31 ธันวาคม พ.ศ. 2565
      
      จึงเรียนมาเพื่อทราบ
      งานฝ่ายแผนและงบประมาณ

      ข้อมูลการติดต่อ
      {{emp_name}}
      โทร. {{tel}}
      Email :{{#emails}} {{name}} {{/emails}}`;
    // var source =
    //   "<p>เรียน {{name}}" +
    //   "{{name}} สามารถเข้าระบบ เพื่อรายงานผลตัวชี้วัด และ ในไตรมาสที่ 1 ประจำปีงบประมาณ 2565 ภายในวันที่ 1 ธันวาคม พ.ศ. 2565 ถึงวันที่ 31 ธันวาคม พ.ศ. 2565" +
    //   "จึงเรียนมาเพื่อทราบ" +
    //   "งานฝ่ายแผนและงบประมาณ" +
    //   "ข้อมูลการติดต่อ" +
    //   "{{emp_name}}" +
    //   "โทร.{{tel}}" +
    //   "Email:" +
    //   "<ul>{{#emails}} <li>{{name}}</li>{{/emails}} </ul>";
    var template = Handlebars.compile(source);

    var result = template(data);
    console.log(result,moment().format("DD-MM-YYYY hh:mm:ss"));
    return [data.subject,result]
}

export default test