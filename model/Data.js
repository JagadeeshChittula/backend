const mangoose = require('mongoose');

const userSchema = new mangoose.Schema({
    name: {
        type: String,
       
    },
    age: {
        type: Number,
        
    },
    email:{
        type: String,
        
    }
});


module.exports = mangoose.model("Data", userSchema);