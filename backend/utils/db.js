import mongoose from "mongoose";
import chalk from "chalk";
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(chalk.yellow.bold('mongodb connected successfully...'));
    } catch (error) {
        console.log(error);
    } 
}
export default connectDB;