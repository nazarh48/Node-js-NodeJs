
console.log("1");

// it will not wait for this to go forward.
setTimeout(()=>{
console.log('3');
}, 2000)

console.log('4');


//disadvantage

let a = 10;
let b = 0;

// this will not be calculated
setTimeout(()=>{
    b=20;
    }, 2000)

    console.log(a+b)