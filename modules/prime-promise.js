function isPrimeSync(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++)
        if (number % i === 0)
            return false;
    return true;
}
function delay( time ){

	return  new Promise( (resolve, reject) => {
		
		setTimeout( () => {
            console.log("inside delay")
			resolve();
		}, time);
	
	});

}



function findPrimesAsync(min, max) {

    return new Promise(async function (resolve, reject) {
        console.log('clearing interval...',max);
        let lo = min;
        let hi = Math.min(max, min + 1000);  //hi will be min+1000 or max whichever is less
        let primes = [];
        console.log(lo,hi);
        let funInterval =(lo,hi)=>{
            console.log('inside funinterval',lo,hi);
            if (max <= min) {
                //cb(new Error(`Invalid Range ${min}-${max}`));  //return the Error
                return reject(new Error(`Invalid Range ${min}-${max}`));
            }
            

            for (let i = lo; i < hi; i++) {
                if (isPrimeSync(i))
                    primes.push(i);
            }
            console.log(primes.length);
            lo = hi;
            hi = Math.min(max, lo + 1000);
            
            console.log(lo,hi,"jsut print");
        }
        await delay(10);
        
        console.log('1 iteration complted')
        if (lo >= max) { //job is over
            console.log('clearing interval... inside condition');
            
            //cb(null, primes);  //inform the client about the primes
            return resolve(primes.length);
        }
        else
            funInterval(lo,max);
            console.log('inside else',lo,hi);
    });
}

findPrimesAsync(1,10000).then((data)=>console.log('done',data))

module.exports = {
    isPrimeSync,    //isPrimeSync:isPrimeSync
     
    findPrimesAsync    //findPrimesAsync:findPrimesAsync
    
}


