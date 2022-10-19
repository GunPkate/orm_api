import { DataSource } from "typeorm";




    const intern_dataSource = new DataSource({
        "type": "mysql",
        "host": "localhost",
        "port": 3406,
        "username": "root",
        "password": "Tu5602680",
        "database": "",
        "synchronize": true,
        "logging": true,
        "entities": [],
    })
    console.log("connected");
    intern_dataSource.initialize()


export default intern_dataSource