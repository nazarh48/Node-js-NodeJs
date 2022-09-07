const express = require('express');
const path = require('path');
const app = express();
const dirPath = path.join(__dirname, 'html');

// app.use(express.static(dirPath))

app.get('', (req, res)=>{
    res.sendFile(`${dirPath}/index.html`)
})

app.get('/about', (req, res)=>{
    res.sendFile(`${dirPath}/about.html`)
})

app.get('*', (req, res)=>{
    res.sendFile(`${dirPath}/nopage.html`)
})



app.listen(7000);
