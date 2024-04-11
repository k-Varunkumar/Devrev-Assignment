/*Before creating parts like capability/enhancement/feature we have to first create a Product as this doesnt require any parent_part parameter, after creating a product we can create our capability/enhancement/feature*/
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY

const postData = {
  "type": "capability",
  "name": "CAPABILITY1",
  "owned_by": [
    "don:identity:dvrv-us-1:devo/1C3VxlSF66:devu/1"//ur dev id get from ./devusers/get.js
  ],
  "parent_part": [
    "don:core:dvrv-us-1:devo/1C3VxlSF66:product/3"//Create a product first then copy the id of the product here(dont provide default part ids)
  ]
};

axios.post('https://api.devrev.ai/parts.create', postData, {
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
