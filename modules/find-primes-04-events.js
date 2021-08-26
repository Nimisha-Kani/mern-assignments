//a require while loading the module 
//executes the code inside it
const {findPrimesEvent}=require('./primes');


let e=findPrimesEvent(2,500000);

e.on('error',error=>{
    process.stdout.write(error.message);
});

e.on('done', data=>{
    process.stdout.write(`\rtotal primes between ${data.min} and ${data.max} is ${data.total}`)
});

e.on('progress', ({percent})=>{
    process.stdout.write(`\r${parseInt(percent)}%`);
});

e.on('abort',data=>{
    process.stdout.write(`\rmin: ${data.min} max: ${data.max} total primes found ${data.total}`)
})