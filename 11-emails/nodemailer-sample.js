const nodemailer = require("nodemailer");
const fs = require('fs')
let attachments = [
      {   // utf-8 string as an attachment
          filename: 'text1.txt',
          content: 'hello world!'
      },
      {   // binary buffer as an attachment
          filename: 'text2.txt',
          content: new Buffer('hello world!','utf-8')
      },
      {   // file on disk as an attachment
          filename: 'text3.txt',
          path: '11-emails\\assets\\file.txt' // stream this file
      },
      {   // filename and content type is derived from path
          path: '11-emails\\assets\\file.txt'
      },
      {   // stream as an attachment
          filename: 'text4.txt',
          content: fs.createReadStream('11-emails\\assets\\file.txt')
      },
      {   // define custom content type for the attachment
          filename: 'text.bin',
          content: 'hello world!',
          contentType: 'text/plain'
      },
      {   // use URL as an attachment
          filename: 'license.txt',
          path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
      },
      {   // encoded string as an attachment
          filename: 'text1.txt',
          content: 'aGVsbG8gd29ybGQh',
          encoding: 'base64'
      },
      {   // data uri as an attachment
          path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='
      },
      {
          // use pregenerated MIME node
          raw: 'Content-Type: text/plain\r\n' +
               'Content-Disposition: attachment;\r\n' +
               '\r\n' +
               'Hello world!'
      },
      {
        filename: 'image1.jpg',
        path: '11-emails\\assets\\image1.jpg',
        cid: 'image1id' //same cid value as in the html img src
    }
  ]

const sendEmail = async ()=> {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();
  console.log(testAccount)
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Sender Name 👻" <sender@example.com>', // sender address
    to: "xyz@gmail.com,yzxbb@xyz.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>Embedded image<img src='cid:image1id'/>", // html body
    attachments:attachments //attachments
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

sendEmail().catch(console.error);