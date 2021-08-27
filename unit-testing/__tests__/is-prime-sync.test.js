
const { expect } = require('@jest/globals');
let {isPrimeSync}= require( '../src/libs/primes');



//I want to write multiple tests related to isPrimeSync
//we can group them together in a test suite by calling a function describe
//describe groups related tests together 

describe('isPrimeSync tests',()=>{

    test('2 should be prime',()=>{
        expect(isPrimeSync(2)).toBeTruthy();
    });

    it('should return true for 5',()=>{
        let result=isPrimeSync(5);
    
        expect(result).toBe(true);
    });
    
    it('should return false for 15',()=>{
    
        expect(isPrimeSync(15)).toBeFalsy(); //false or false like values example: null/undefined/0 etc
        
    });

    it('should consider 2 to be prime',()=>{

        expect(isPrimeSync(2)).toBeTruthy();

    });

    it('should consider 0  to be not prime',()=>{
        
        expect(isPrimeSync(0)).toBe(false);
    });

    it('should consider 1 to be not prime',()=>{
        expect(isPrimeSync(1)).toBe(false);
        
    });

    it('should consider negative values as not prime',()=>{
        expect(isPrimeSync(-2)).toBe(false);
    });

})
   
    
    









