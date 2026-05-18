const express=require('express');
const app=express();

const mangoodb=require('mongoose');
const collegedata = require('./model/Data');
const Data = require('./model/Data');

app.use(express.json());

mangoodb.connect("mongodb+srv://Jagadeeshkumar:Jagadeeshkumar@cluster0.sdsn0sa.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("connected to database");
})

//create
app.post("/college/add",async(req,res)=>{
    try {
        const college =new collegedata(req.body);

        await college.save();

        res.send(college)

    } catch (error) {
        res.send(error);
        
    }

})

//read
app.get("/college",async(req,res)=>{
    try {
        const college =await collegedata.find();
        res.send(college);
    } catch (error) {
        res.send(error);
    }


})

//single data read
app.get("/college/:id",async(req,res)=>{
    try {
        const college =await Data.findById(req.params.id);

        res.send(college)
    } catch (error) {
        res.send(error);
    }

})

//update
app.put("/college/update/:id",async(req,res)=>{
    try {
        const college=await Data.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.send(college);
        
    } catch (error) {
        res.send(error);
    }

})

//delete
app.delete("/college/delete/:id",async(req,res)=>{
    try {
        const college =await Data.findByIdAndDelete(req.params.id);
        res.send("user is deleted");
    } catch (error) {
        res.send(error);
    }
});


app.listen(5000,()=>{
    console.log("server is started");
});