const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const fielPath = `${dirPath}/crud.txt`;

// to create file
// fs.writeFileSync(filePath , 'this is crud ops');

// to read file
fs.readFile(fielPath, 'utf8', (err, item)=>{
    console.log(item)
})

// to update file data
fs.appendFile(fielPath, ' and file name is crud.txt', (err)=>{
    if(!err){
        console.log('updated')
    }
})

// to rename file
fs.rename(fielPath,`${dirPath}/newfile.txt`,(err)=>{
    if(!err){
        console.log('file name updated')
    }
})


// to delete file
fs.unlinkSync(`${dirPath}/newfile.txt`)

 