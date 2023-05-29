// eslint-disable-next-line import/no-import-module-exports
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = async (req, res) => {
  const url = 'https://developers.flouci.com/api/generate_payment';
  const requestData = req.body;

  try {
    const response = await axios.post(url, requestData);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
};
