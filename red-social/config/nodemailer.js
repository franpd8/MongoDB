const nodemailer = require('nodemailer');
const { auth } = require('./keys.js')
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: auth,
});
module.exports = transporter;

