/*Finally to create a workitem we compulsarily require 4 fileds type,title,owned by and applies to part. Now title can be any name, type can be a issue/ticket raised by customer/developer, now owned_by means the id of user who raised the issue/ticket and finally appies_to_part means the part to which the issue/ticket related to */
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY

const postData = {
  "type": "issue",
  "applies_to_part": "don:core:dvrv-us-1:devo/1C3VxlSF66:capability/5",//provide id of any created parts
  "owned_by": [
    "don:identity:dvrv-us-1:devo/1C3VxlSF66:devu/1"//provide id of the devuser the workitem belongs to
  ],
  "title": "WORKITEM1"
};

axios.post('https://api.devrev.ai/works.create', postData, {
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
