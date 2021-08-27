let {findPrimesSync}= require('./libs/primes');
const assert = require('assert').strict;


let result=findPrimesSync(2,100);

console.log('result',result);


assert.equal(result.length,26);
