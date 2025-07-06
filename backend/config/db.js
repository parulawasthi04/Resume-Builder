import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect("mongodb://parul04:hakunamatata@ac-kaz4cwg-shard-00-00.pngzouj.mongodb.net:27017,ac-kaz4cwg-shard-00-01.pngzouj.mongodb.net:27017,ac-kaz4cwg-shard-00-02.pngzouj.mongodb.net:27017/resume?replicaSet=atlas-o991p4-shard-0&ssl=true&authSource=admin")
    .then(() => console.log("DB CONNECTED")); 
}