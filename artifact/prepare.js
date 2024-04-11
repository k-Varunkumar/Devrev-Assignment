/*To create a artifact object it requires a file as an input for the API, so we have created a hello.js file and this returns an url and an expiry date of the artifact */
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY

const requestData = {
  file_name: "hello.txt"
};

const options = {
  method: 'POST',
  url: 'https://api.devrev.ai/artifacts.prepare',
  headers: {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  },
  data: requestData
};

axios(options)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.response.data);
  });
