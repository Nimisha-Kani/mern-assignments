

const isPrimeSync=(number)=>{
    if(number<2)
        return false;
    for(let i=2;i<number;i++){
        if(number%i===0)
            return false;
    }
    return true;
}


const findPrimesSync=(min,max)=>{

    if(max<=min)
        throw new Error(`Invalid Range: ${min} >= ${max}`);
        //return [];

    let result=[];

    for(let i=min;i<max;i++)
        if(isPrimeSync(i))
            result.push(i);

    return result;
}


function findPrimes(min, max, cb) {

    let lo = min;
    let hi = Math.min(max, min + 1000);  //hi will be min+1000 or max whichever is less
    let primes = [];

    let iid = setInterval(() => {

        if (max <= min) {
           return  cb(new Error(`Invalid Range ${min}-${max}`));  //return the error
        }

        if (lo >= max) { //job is over
            //console.log('clearing interval...');
            clearInterval(iid); //stop interval
            return cb(null, primes);  //inform the client about the primes
        }

        for (let i = lo; i < hi; i++) {
            if (isPrimeSync(i))
                primes.push(i);
        }

        lo = hi;
        hi = Math.min(max, lo + 1000);

    }, 10); //repeat this after every 100 ms


}



let EventEmitter=require('events');

function findPrimesEvent(min, max) {

    let emitter=new EventEmitter();
    
    let lo = min;
    let hi = Math.min(max, min + 1000);  //hi will be min+1000 or max whichever is less
    //let primes = [];
    let total=0;
    let abortRequested=false;
    let lastPrimeFound=NaN;

    let iid = setInterval(() => {

        

        if (max <= min) {
            //cb(new Error(`Invalid Range ${min}-${max}`));  //return the Error
            //return reject(new Error(`Invalid Range ${min}-${max}`));
            clearInterval(iid);
            emitter.emit('error', new Error(`Invalid Range ${min} to ${max}`)); //emitted only once
            
            return;
        }

        if (lo >= max) { //job is over
            //console.log('clearing interval...');
            clearInterval(iid); //stop interval
            //cb(null, primes);  //inform the client about the primes
            //return resolve(primes);
            return emitter.emit('done', total);  //emitted only once
        }

        for (let i = lo; i < hi; i++) {
            if (isPrimeSync(i)){
                //primes.push(i);
                lastPrimeFound=i;
                total++;
                emitter.emit('prime', {min,max,index:total,prime:i}); //repeated everythime we find a prime
            }
        }

        let percent=parseInt( (lo-min)/(max-min)*100);

        if(abortRequested){
            clearInterval(iid);
            emitter.emit('aborted',{min,max,percent,total,lastPrimeFound})
            return ;
        }


        lo = hi;
        hi = Math.min(max, lo + 1000);
       
        emitter.emit('progress',{min,max,percent}); //repeated afer every 1000 calculation

    }, 10); //repeat this after every 100 ms

    emitter.on('abort',()=>{
        abortRequested=true;
    });


   return emitter;
}





module.exports={
    findPrimesSync,    //findPrimesSync:findPrimesSync
    isPrimeSync,    //isPrimeSync:isPrimeSync
    findPrimes,    //findPrimes:findPrimes
    findPrimesEvent
}