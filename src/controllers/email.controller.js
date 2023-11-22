import nodemailer from "nodemailer";
import config from '../config/config.js';
import __dirname from '../utils.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: config.gmailAccount,
        pass: config.gmailAppPassword
    }
});

transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});

export const sendMailToContact = async (req) => {
    const {email, asunto, mensaje} = req.body;

    const mailToContact = {
        from: email,
        to: config.gmailAccount,
        subject: asunto,
        html: mensaje,
        attachments: []
    }
  
    try {
        await transporter.sendMail(mailToContact);
        console.log('Mail sent to', config.gmailAccount);
        return 'Correo electrónico enviado exitosamente';
    } catch (error) {
        console.error(error);
        throw new Error("No se pudo enviar el correo electrónico");
    }    
};


