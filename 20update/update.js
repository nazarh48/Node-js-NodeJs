const dbConnect = require('./dbConnnect');

const update = async ()=>{
    let data = await dbConnect();
    // update updateOne updateMany
    data = await data.update({name:'nazar'},{$set:{phone:'92305092354'}});
    console.log(data)
    if(data.acknowledged){
        console.log('data updated')
    } 
}
update()