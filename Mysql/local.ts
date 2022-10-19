import { DataSource } from "typeorm";




    const local_dataSource = new DataSource({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "admin1",
        "password": "G7vd]8)TR.bT/BFe",
        "database": "edvisory",
        "synchronize": true,
        "logging": true,
        "entities": [],
    })
    console.log("connected");
    local_dataSource.initialize()


export default local_dataSource