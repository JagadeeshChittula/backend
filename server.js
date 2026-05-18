//express

const express=require('express');
const app=express();
const bcrypt = require('bcrypt');


const user1={
    name:"chittaranjan",
    age:22,
    city:"Bhubaneswar"
}

const data={
    message: "Hii this is a example"
};




app.get("/data",(req,res)=>{
    res.send(data);
});

app.get("/user", (req, res) => {``
    res.json(user);
});

app.get("/",(req,res)=>{
    // res.json("<h2>Welcome to my server</h2>");
    // res.send("<h2>Welcome to my server</h2>");
    res.end("<h2>Welcome to my server</h2>");

})







//mangoose creation

const mangoose=require('mongoose'); //importing the mangoose module
const User = require('./model/User');  //import the user model

//middleware
app.use(express.json()); //to parse the json data from the request body

mangoose.connect("mongodb+srv://Jagadeeshkumar:Jagadeeshkumar@cluster0.sdsn0sa.mongodb.net/?appName=Cluster0")
.then(()=>{
    console.log("connected to database");
})

// CRUD operations  create 

app.post("/",async(req,res)=>{
    try {
        const user = new User(req.body);

        await user.save();

        res.send(user);
        
        
    } catch (err) {
        res.send(err);
    }
    

})

//to read data from the database
app.get("/students",async(req,res)=>{
    try {
        const user = await User.find();
        res.send(user);

        
    } catch (err) {
        res.send(err);
    }   

})


//single data read
app.get("/students/:id",async(req,res)=>{
    try {

        const user =await User.findById(req.params.id);

        res.send(user);
        
    } catch (error) {
        console.log(error)
    }

});

//update

app.put("/students/update/:id",async(req,res)=>{
    try {
        const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})

        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

//delete


app.delete("/students/:id",async(req,res)=>{
    try {

        const user =await User.findByIdAndDelete(req.params.id);

        res.send("user deleted");
        
    } catch (error) {
        console.log(error)
    }

});


//regestration

app.post("/register",async(req,res)=>{
    try {
        const {name,email,password} = req.body;

        const userExist = await User.findOne(
            {
                email
            }
        )
        if(userExist){
            return res.end("user already in DB");
        }

        const hasPassword = await bcrypt.hash(password,13);
        console.log(hasPassword);


        const user = new User({
            name,
            email,
            password: hasPassword
        });

        await user.save();
        res.send(user);
//login




    } catch (error) {
        console.log(error)
    }

})










app.listen(4000,()=>{
    console.log("server is started");
});