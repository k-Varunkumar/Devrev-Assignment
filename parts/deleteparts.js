/*Used to delete any created part using its ID)= */
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY;


const postData = {
  id: 'don:core:dvrv-us-1:devo/1C3VxlSF66:product/2' //Id of the part to be deleted
};

axios.post('https://api.devrev.ai/parts.delete', postData, {
  headers: {
    'Authorization': key,
    'Content-Type': 'application/json'
  }
})
.then(response => {
  console.log('Response:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});