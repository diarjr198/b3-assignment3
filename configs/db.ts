import mongoose from "mongoose";

class mongoDB {
    constructor() {}
    public static connect = async () => {
        try {
            const dbName: string = "Assignment3";
            const dbPathUri = `mongodb://admin:admin198@cluster0-shard-00-00.5fe6q.mongodb.net:27017,cluster0-shard-00-01.5fe6q.mongodb.net:27017,cluster0-shard-00-02.5fe6q.mongodb.net:27017/${dbName}?ssl=true&replicaSet=atlas-l18dcq-shard-0&authSource=admin&retryWrites=true&w=majority`;
            await mongoose.connect(`${dbPathUri}`);
            console.log("DB connection established");
        } catch (err) {
            console.log(err);
        }
    };
}

export default mongoDB;
