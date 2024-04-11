/*This api accepts userId as an input and provides all information about that devuser */
const axios = require('axios');

require("dotenv").config();

const key = process.env.KEY

const userId = 'don:identity:dvrv-us-1:devo/1C3VxlSF66:devu/1';

axios.get('https://api.devrev.ai/dev-users.get', {
  headers: {
    'Authorization': key
  },
  params: {
    id: userId
  }
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});