// const passport = require("passport");
// const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: "coderdost@gmail.com", // gmail
//     pass: process.env.MAIL_PASSWORD, // pass
//   },
// });

// exports.isAuth = (req, res, done) => {
//   return passport.authenticate("jwt");
// };

// exports.sanitizeUser = (user) => {
//   return { id: user.id, role: user.role };
// };

// exports.cookieExtractor = function (req) {
//   let token = null;
//   if (req && req.cookies) {
//     token = req.cookies["jwt"];
//   }
//   return token;
// };

// exports.sendMail = async function ({ to, subject, text, html }) {
//   let info = await transporter.sendMail({
//     from: '"E-commerce" <coderdost@gmail.com>', // sender address
//     to,
//     subject,
//     text,
//     html,
//   });
//   return info;
// };
