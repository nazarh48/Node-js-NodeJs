const express = require('express');
const app = express();
const route = express.Router();
const reqFilter = require('./middleware')
// const reqFilter = (req, res, next)=>{
//     if(!req.query.age){
//         res.send('Please enter your age to continue');
//     }
//     else if(req.query.age<18){
//         res.send('You are underage');
//     }
//     else{
//         next();
//     } 
// }

// app.use(reqFilter);



app.get('/', (req, res)=>{
    res.send('this is home page');
});

// end above and use reqFilter to specific page
// app.get('/about', reqFilter, (req, res)=>{
//     res.send('this is about page');
// });


route.use(reqFilter);

app.get('/user', (req, res)=>{
    res.send('this is users page');
});

route.get('/about', (req, res)=>{
    res.send('this is about page');
});

app.get('/contact', (req, res)=>{
    res.send('this is contact page');
});
app.use('/', route)

app.listen(5000);