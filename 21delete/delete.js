const dbConnect = require('./dbConnnect');

const deleteData = async ()=>{
    let data = await dbConnect();
    // delete deleteOne deleteMany
    data = await data.deleteOne({name:'ali'});
    console.log(data)
    if(data.acknowledged){
        console.log('data Deleted')
    } 
}
deleteData()