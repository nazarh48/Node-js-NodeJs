const express = require('express');
const dbConnect = require('./dbConnnect');
const mongodb = require('mongodb'); // this is for the object it
const app = express();

app.use(express.json());

// TO READ DATA 
app.get('/', async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send(JSON.stringify(data))
   
})

// TO ENTER DATA
app.post('/', async (req, res)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    // console.log(req.body)
    res.send(result)
})


//TO UPDATE DATA
app.put('/:name', async (req, res)=>{
    // console.log(req.body)
    let data = await dbConnect();
    let result = await data.updateOne(
        // {name:req.body.name},
        {name: req.params.name}, //name is coming from the route is name ka sab data jo postman sy kr rhy hain update hoga
        {$set:req.body}) // here all data will be updated also name too
    res.send({result:'update'})
})

app.delete('/:id', async (req, res)=>{
    console.log(req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
})
app.listen(5000)