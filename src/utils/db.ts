import mongoose from "mongoose";
import * as envConfig from "../config/env";

const connection: any = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(envConfig.MONGODB_URI);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
