const nodemailer = require('nodemailer');

export default function handler(req, res) {

  const emailReciever = req.body.local === 'Sant Antoni' ? 'santantoni@kiltrobcn.com' : 'gracia@kiltrobcn.com';

  const message = {
    from: 'noreply@kiltrobcn.com',
    to: emailReciever,
    subject: req.body.subject,
    html: `
    <h2 align="center">¡Has recibido una pregunta desde la página web!</h2>
    <p>Local: ${req.body.local}</p>
    <p>Nombre: ${req.body.name}</p>
    <p>Correo electrónico: ${req.body.email}</p>
    <p>Teléfono: ${req.body.phone}</p>
    <p>Mensaje: ${req.body.message}</p>
    `,
  };

  let transporter = nodemailer.createTransport({
    host: 'mail.kiltrobcn.com',
    port: 465,
    auth: {
      // user: process.env.EMAIL,
      // pass: process.env.EMAIL_PASS,
      user: 'noreply@kiltrobcn.com',
      pass: '.j0WL2zWZ[wb',
    },
  });

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {

      if (err) {
        res.status(404).json({
            error: `Connection refused at ${err.address}`
        });
      } else {
        res.status(250).json({
            success: `Message delivered to ${info.accepted}`
        });
      }
    });
  }
}