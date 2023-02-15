import axios from 'axios';

const sendEmail = async (email, subject, message, phone, name) => {
  return axios({
    method: 'post',
    url: '/api/send-email',
    data: {
      email,
      subject,
      message,
      phone,
      name,
    },
  });
};

export default sendEmail;