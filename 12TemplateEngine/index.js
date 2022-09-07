const express = require('express');
const path = require('path');
const app = express();
const dirPath = path.join(__dirname, 'html');



app.get('', (req, res)=>{
    res.sendFile(`${dirPath}/index.html`)
})

app.get('/about', (req, res)=>{
    res.sendFile(`${dirPath}/about.html`)
})

// app.get('*', (req, res)=>{
//     res.sendFile(`${dirPath}/nopage.html`)
// })

// this is to set the view engine having template ejs
app.set('view engine', 'ejs');

app.get('/profile', (req, res)=>{
    const user = {
        name: 'nazar',
        email: 'nazar@gmail.com',
        city: 'lahore',
        skills: ['js','php','node','java']
    }
    res.render('profile', {user});
})


app.listen(7000);
