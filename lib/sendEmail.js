import axios from 'axios';

const sendEmail = async (email, subject, message, phone, name, local) => {
  return axios({
    method: 'POST',
    headers: {
      Accept: "application/json"
  },
    url: '/api/send-email',
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