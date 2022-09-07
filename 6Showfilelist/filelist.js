const path = require('path'); // have to require it to use path
const fs =  require('fs')
console.log(__dirname); //return curent directory
const dirPath = path.join(__dirname, 'files');

for(let i=0; i<5; i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt", 'this is file');
}
fs.readdir(dirPath,(err, files)=>{
    files.forEach((items)=>{
        console.log(items)
    })
})
