let a = 10;
let b = 0;

// this will not be calculated
let waitingData = new Promise((resolve, reject) => {
    setTimeout((data) => {
        resolve(30)
        
    }, 2000)
})

waitingData.then((data)=>{
b = data;
console.log(a+b)
})