const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });

var mailOptions = {
    from:'youremail@gmail.com',
    to:'receiveremail@gmail.com,receiver2@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  }; 

const sendEmail = async(mailOptions)=>{
    try {
        const info = await transporter.sendMail(mailOptions)
        console.log("Mail Sent Success\n",info)
    } catch (error) {
        console.log("Error while sending mail -\n",error.message)
    }finally{

    }
}

sendEmail(mailOptions)