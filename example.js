const express=require('express');
const app=express();


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



app.listen(4000,()=>{
    console.log("server is started");
});