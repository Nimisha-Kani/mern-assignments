const {findPrimesAsync} = require('./prime-promise');


async function findAndPrintPrimes(max){

    try{

        
        console.log('finding primes between 2 and ',max);
        let primes=await findPrimesAsync(2,max);
        
        console.log('total primes between 2 and ',max, ' is ',primes.length);
        
        console.log();

    }catch(error){
        console.log('error',error.message)
    }
   
    
}

findAndPrintPrimes(100).then(()=>console.log('done'));

