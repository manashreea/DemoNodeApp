const nodemailer = require('nodemailer');

const toemail = 'manashreenerkar@gmail.com';
const fromemail = 'manashree_nerkar@yahoo.co.in'

var transporter = nodemailer.createTransport({
    service:'mail.yahoo',
    auth:{
        user:fromemail,
        pass: 'manshri12'
    }
});

var textmailoptions = {
    from:fromemail,
    to:toemail,
    subject:'Test email from nodemailer NodeJs',
    text:'Hello Manashree Agashe from Test email from nodemailer'
}

transporter.sendMail(textmailoptions,function(err,info){
    if(err){
        console.log('Failed Response >> ' + err);
    }
    else{
        console.log('Email Response >> ' + info.response);
    }
});

// var htmlmailoptions = {
//     from:fromemail,
//     to:'manashree_nerkar@yahoo.co.in',
//     subject:'Test email from nodemailer NodeJs',
//     html: '<h1>Hello Manashree Agashe </h1> <br> <p> This is text from nodemailer NodeJs </p>'
// }

// transporter.sendMail(htmlmailoptions,function(err,info){
//     if(err){
//         console.log('Failed Response >> ' + err);
//     }
//     else{
//         console.log('Email Response >> ' + info.response);
//     }
// });