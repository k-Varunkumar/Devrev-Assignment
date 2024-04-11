/*Lists all the devuser info in our organisation */
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY


axios.get('https://api.devrev.ai/dev-users.list', {
  headers: {
    'Authorization': key
  }
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});