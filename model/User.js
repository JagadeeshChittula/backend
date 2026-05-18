const mangoose = require('mongoose');



const userSchema = new mangoose.Schema({
    name: {
        type: String,
       
    }, 
    // age: {
    //     type: Number,
        
    // },
    email:{
        type: String,
        
    },
    password:{
        type: String,
    }
});


module.exports = mangoose.model("User", userSchema);