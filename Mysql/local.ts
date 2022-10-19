import { User } from './../Entities/user';
import { Exercise } from './../Entities/exercise';
import { Location } from './../Entities/location';
import { DataSource } from "typeorm";

    const local_dataSource = new DataSource({
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "admin1",
        "password": "G7vd]8)TR.bT/BFe",
        "database": "orm_test",
        "synchronize": true,
        "logging": true,
        "entities": [Exercise, Location, User],

    })
    console.log("connected");
    local_dataSource.initialize()


export default local_dataSource