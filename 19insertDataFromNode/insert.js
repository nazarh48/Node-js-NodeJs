const dbConnect = require('./dbConnnect');

const insert = async ()=>{
    let data = await dbConnect();
    data = await data.insert({name:'nazar', email:'n@gmail.com', phone: '03123456'});
    console.log(data)
    if(data.acknowledged){
        console.log('data inserted')
    } 
}
insert()