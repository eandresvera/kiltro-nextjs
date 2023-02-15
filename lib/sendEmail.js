import axios from 'axios';

const sendEmail = async (email, subject, message, phone, name, local) => {
  return axios({
    method: 'post',
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