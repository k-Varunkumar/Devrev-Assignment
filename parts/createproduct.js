/*Before creating parts like capability/enhancement/feature we have to first create a Product as this doesnt require any parent_part parameter,so type:product, name can be anything but unique compared to other products in the org*/
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY;


const postData = {
  "type": "product",
  "name": "PRODUCT20",
  "owned_by": [
    "don:identity:dvrv-us-1:devo/1C3VxlSF66:devu/1"//provide proper devuser id for this we can get this using get/list devuser api
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
