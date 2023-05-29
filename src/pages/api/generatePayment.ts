// eslint-disable-next-line import/no-import-module-exports
import axios from 'axios';

module.exports = async () => {
  const url = 'https://developers.flouci.com/api/generate_payment';

  const requestData = {
    app_token: '955ddff9-f0e3-4e8e-8b74-ab30e3b53edf',
    app_secret: 'da3f95a4-2fd5-4c8c-8c49-7cac799e2433',
    amount: '30500',
    accept_card: true,
    session_timeout_secs: 1200,
    success_link: 'https://example.website.com/success',
    fail_link: 'https://example.website.com/fail',
    developer_tracking_id: 'bgyt529J0Uk',
  };

  axios
    .post(url, requestData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      // Handle the response here
      console.log(response.data);
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
    });
};
