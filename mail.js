const nodemailer = require('nodemailer');
let transpoter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"chittulaj@gmail.com",
        pass:"fuajqtmtnmafbklb"
    }
})


let mailoptions ={
    from:"chittulaj@gmail.com",
    to:"chittulajagadeesh365@gmail.com",
    subject:"Sample Mail",
    text:"Hii this is Jagadeesh ,I'm Sending a sample mail to you please verify ",

}

transpoter.sendMail(mailoptions,(error,into)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("mail sent successfully")
    }
})