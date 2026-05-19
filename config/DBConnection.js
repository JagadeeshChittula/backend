const mongoose = require('mongoose');

// const env = require('dotenv');
// env.config();

require('dotenv').config();



const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGODB,
        );
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectDB; 