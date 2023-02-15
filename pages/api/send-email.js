const nodemailer = require('nodemailer');

export default function handler(req, res) {

  const message = {
    from: 'noreply@kiltrobcn.com',
    to: 'eandres.vera@gmail.com',
    subject: req.body.subject,
    html: `
    <h2 align="center">¡Has recibido una pregunta desde la página web!</h2>
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
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
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