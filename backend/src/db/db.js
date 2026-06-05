import mongoose from "mongoose";

export default function connectDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Database connected")
    })
    .catch((err)=>{
        console.log(`DataBase connection failed ${err}`)
    })
}