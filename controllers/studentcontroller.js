const User = require('../model/User');  //import the user model
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middlewares/verifyToken');


exports.createstudent = async(req,res)=>{
    try {
        const user = new User(req.body);

        await user.save();

        res.send(user);
        
        
    } catch (err) {
        res.send(err);
    }
    
}

exports.readStudents = async(req,res)=>{    
    try {
        const user = await User.find();
        res.send(user);
        if(!user){
            return res.end("no user found");
        }

        
    } catch (err) {
        res.send(err);
    }   

}

exports.readsingleStudent = async(req,res)=>{
    try {

        const user =await User.findById(req.params.id);

        res.send(user);
        
    } catch (error) {
        console.log(error)
    }

}

exports.updatestudent = async(req,res)=>{
    try {
        const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true})

        res.send(user);
    } catch (error) {
        res.send(error);
    }
}

exports.deletestudent = async(req,res)=>{
    try {

        const user =await User.findByIdAndDelete(req.params.id);

        res.send("user deleted");
        
    } catch (error) {
        console.log(error)
    }

}

exports.registerstudents = async(req,res)=>{
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

    }catch (error) {
        console.log(error)
    }
}


exports.loginstudents = async(req,res)=>{
            try {
                const {email,password}=req.body

                const user=await User.findOne({email});

                if(!user){
                    return res.end("user not found")
                }

                const ismatch =await bcrypt.compare(password,user.password);

                if(!ismatch){
                    return res.end("invalid password")
                }

                //token generation


                const token = jwt.sign(

                    {id:user._id},
                    "secretkey",
                    {expiresIn: "1h"}
                )

                 res.send({
                    message: "login successful",
                    token
                })

                if(!token){
                    return res.end("token not generated")
                }



            } catch (error) {
                console.log(error)
            }

        }