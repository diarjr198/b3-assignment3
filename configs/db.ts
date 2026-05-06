import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

class mongoDB {
    constructor() {}
    public static connect = async () => {
        try {
            const dbUri = process.env.MONGODB_URI || "mongodb://localhost:27017/Assignment3";

            await mongoose.connect(dbUri);
            console.log("DB connection established");
            console.log(`Connected to: ${dbUri.split("@")[1] || dbUri.split("//")[1]}`);
        } catch (err) {
            console.error("DB connection error:", err);
            process.exit(1);
        }
    };
}

export default mongoDB;
