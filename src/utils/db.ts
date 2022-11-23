import mongoose from "mongoose";
import * as envConfig from "../config/env";

const connection: any = {};

async function dbConnect() {

    // if (connection.isConnected) {
    //     return;
    // }
    console.log('connection to db : ' , envConfig.MONGODB_URI)
    const db = await mongoose.connect(envConfig.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
    console.log('db.connections' ,  db.connections)
    console.log('connected to db 2' ,  connection.isConnected)
}

export default dbConnect;
