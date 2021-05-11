require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/home', (req, res) => {
    res.send('<h1 style="text-align:center;">Hello Express!</h1>')
  });


app.listen(PORT, (req, res)=>{
    
    console.log(`the server is running on port ${PORT}`)
});