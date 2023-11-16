// var mailer = require('node-mailer');

// var mail = new mailer.Mail({
// 	from: 'noreply@domain.com',
// 	to: 'kehindeogunyade@gmail.com',
// 	subject: 'My Subject',
// 	body: 'My body is paining me',
// 	callback: function(err, data){
// 		console.log(err);
// 		console.log(data);
// 	}
// });

var nodemailer = require("nodemailer");

var mailOptions = {
  from: "kehinde@gmail.com",
  to: "kehindeogunyade1@yahoo.com, kehindeogunyade4@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};
