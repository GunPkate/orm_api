import express,{Router,Request,Response} from 'express';
import { User } from '../Entities/user';
import local_dataSource from "../Mysql/local"

const user:Router = express();

//SQL query
user.get('/getall',async(req:Request,res:Response)=>{
    const query:string = 'SELECT * FROM user;' 
    const find:any = await local_dataSource.query(query)
    console.log(find);
    console.log("count: ",find.length);
    
    res.status(200).json({
        code: 200,
        sescription: "find all",
        data : find 
    })
})

//find
user.get('/getbyid/:id',async(req:Request,res:Response)=>{
    const id = parseInt(req.params.id)
    console.log(id);
    
    const find = await User.find({ where:{id: id}})

    res.status(200).json({
        code: 200,
        description: `find by ${id}`,
        data : find 
    })
})
user.post('/createuser',(req:Request,res:Response)=>{
    const {firstname,lastname,username,password,email,} = req.body;
    console.log(req.body);
    
    try {
        const added = User.insert({
            id: 1,
            firstname:firstname,
            lastname:lastname ,
            username:username ,
            password:password ,
            email:email ,
            version : 1
            // created_at: "2022-06-09 17:08:26.527471",
            // updated_at: "2022-06-09 17:08:26.527471",
            // deleted_at: null,
            // version: 1
        })
        res.status(201).json({
            code: 201,
            description: "added",
            // data : added 
        })
    } catch (error) {
        res.status(500).json({
            code: 500,
            description: error,
        })
    }

}
)

export default user;