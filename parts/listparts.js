/*Used to delete a created part using its id, list default parts too*/
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY;


axios.get('https://api.devrev.ai/parts.list', {
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
