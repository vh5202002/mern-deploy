// post, get, listen
const express = require('express');
const app = express();
// port
const dotenv = require('dotenv');
// cors to connect frontend api and backend api 
const cors = require('cors');
dotenv.config();


app.use(cors());

app.get('/api/test', (req, res) => {
    res.json('Hello world ' + Date.now());
});



// console.log(process.env.API_PORT);
if (process.env.API_PORT){
    app.listen(process.env.API_PORT);
}

module.exports = app;