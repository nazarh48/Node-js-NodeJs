const dbConnect = require("./dbConnnect"); // this is comming from other database file


// <-----PROMISES USED HERE ----->
// getData().then((res)=>{
//     res.find({name:'ali'}).toArray().then((data)=>{
//         console.warn(data)
//     }); // this will also return promise without then so will embed then here
// })

// ASYNC AWAIT 
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
}

main();