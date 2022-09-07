const express = require('express');
const path = require('path');
// console.log('folde is',__dirname)
const app = express();
const dirPath = path.join(__dirname, 'html');

app.use(express.static(dirPath))

app.listen(7000);
