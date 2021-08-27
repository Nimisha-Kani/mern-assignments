const { expect } = require("@jest/globals");
const { findPrimes } = require("../src/libs/primes");


describe('findPrimes tests',()=>{
    xit('should return 25 primes under 100',()=>{

        findPrimes(0,100, (error,primes)=>{

            //test was declared passed long before we reach here
            expect(error).toBeNull();
            expect(primes.length).toBe(2500);

        });
        //we reach here and test framework thinks test has passed
    });

    it('should return 25 primes under 100',(done)=>{
         
        findPrimes(0,100, (error,primes)=>{
            try{
                expect(error).toBeNull();
                expect(primes.length).toBe(25);
                console.log('callback is called');
                done();
            }catch(error){
                done(error);
            }

        });

    });

    it('should return error for invalid range', done=>{

        findPrimes(10,1,(error,data)=>{

            try{
                expect(data).toBeUndefined();
                expect(error.message).toMatch(/Invalid Range*/);
                done();
            }catch(e){
                done(e);
            }
        });

    });
});