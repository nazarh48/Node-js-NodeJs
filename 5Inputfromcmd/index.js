// this will take input from command 
const fs = require('fs');
console.log(process.argv);
const input = process.argv;

if(input[2]=='add'){
     //command to run this script, run on terminal node index.js add orange.txt 'this is color and fruit'
    fs.writeFileSync(input[3], input[4]);
}
else if(input[2]=='remove'){
     //command to run this script, run on terminal node index.js remove orange.txt 'this is color and fruit'

    fs.unlinkSync(input[3]);
}
else{
    console.log("invalid input");
}