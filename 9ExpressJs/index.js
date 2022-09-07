const express = require('express');
const app = express();

app.get('', (req, res) => {
    // comming request from client through url
    // console.log('the name is ' + req.query.name)
    // res.send('Welcome ' + req.query.name);
    // res.send(`<h1>Hello Home</h1>`)
    res.send([{
        name: 'nazar',
        email: 'nazarh48@gmail.com'
    },
    {
        nazar: 'hussain',
        email: 'malik@gmail.com'
    }

    ]);
})

app.get('/about', (req, res) => {
    res.send('Hello this is about page');
})

app.get('/help', (req, res) => {
    res.send('Hello this is help page');
})


app.listen(4000);