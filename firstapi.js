/*This api provides info about ourself(a devuser) */
const axios = require('axios');
require("dotenv").config();

const key = process.env.KEY

const url = 'https://api.devrev.ai/dev-users.self';
const token = key;
//Token/apiKey is the PAT of the user, its stored in the .env file and can be accessed from there

axios.get(url, {
headers: {
  'Authorization': token,
}
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error(error);
});
