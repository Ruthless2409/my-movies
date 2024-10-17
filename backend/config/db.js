import mongoose from "mongoose";
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Succesfully connected to MongoDB')

    } catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1)
    }
}