const nodemailer = require("nodemailer");

const transporter= nodemailer.createTransport( {
    service: "hotmail",
    auth:{
        user:"nodetmapi@outlook.com",
        pass:"soumya@123"
    }

} )

// const sendWelcomeEmail= (email,name)=>{
    transporter.sendMail({
            from:"nodetmapi@outlook.com",
            to: "sourcexxxcode@gmail.com",
            subject:"Thanks for joining",
            text: 'Welocme',
            attachments:[
                {
                    filename: 'img.png',
                    path:"img.png"
                }
            ]
        }
    )
// }

// sendWelcomeEmail("sourcexxxcode@gmail.com","shivam")

// const sendCancellationEmail= (email,name)=>{
//     transporter.sendMail({
//             from:"nodetmapi@outlook.com",
//             to: email,
//             subject:"Good bye",
//             text: `Good bye ${name} any suggestions`
//         }
//     )
// }

// module.exports={
//     sendWelcomeEmail,
//     sendCancellationEmail
// }