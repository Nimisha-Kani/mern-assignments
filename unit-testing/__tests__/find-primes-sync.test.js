

const {findPrimesSync} = require('../src/libs/primes');

describe('findPrimesSync tests',()=>{

    it('should return 4 primes between 2 and 10',()=>{
        expect(findPrimesSync(2,10).length).toBe(4);
    });


    it('should return 25 primes under 100',()=>{

        let primes=findPrimesSync(0,100);

        expect(primes.length).toBe(25);

    });

    xit('should throw Error for invalid range',()=>{

        let success=true;
        try{
            findPrimesSync(10,1); //should throw error
            //if you reach here then test has failed
            console.log('test should have failed');
            success=false;
           
        }catch(e){
            //if you reach here the test has passed.
            expect(e.message).toMatch(/Invalid Range:*/);
        }

        if(!success)
            expect(true).toBe(false);

    });

    it('should throw Error for invalid range',()=>{

        //expect(()=>findPrimesSync(10,1)).toThrow();

        expect(()=>findPrimesSync(10,1)).toThrow(/Invalid Range/);

    });

});


