import axios from 'axios';

const sendEmail = async (email, subject, message, phone, name, local) => {
  return axios({
    method: 'POST',
    url: '/api/send-email',
    body: JSON.stringify(email, subject, message, phone, name, local),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    data: {
      email,
      subject,
      message,
      phone,
      name,
      local,
    },
  });
};

export default sendEmail;