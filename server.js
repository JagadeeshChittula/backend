const express=require('express');
const app=express();

app.use(express.json());

const studentRoutes = require('./routes/studentsRoutes');

app.use("/api", studentRoutes);

const connectDB = require('./config/DBConnection');

connectDB();

app.listen(4000,()=>{
    console.log("server is started");
});