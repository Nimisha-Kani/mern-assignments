const { findPrimesEvent } = require("../src/libs/primes");

describe('findPrimesEvent Test',()=>{
    it('It should have 25 primes under 100',done=>{
        
        let e = findPrimesEvent(0,100);
        
            e.on('done',(data)=>{
                try{
                    // expect(error).toBeNull();
                    console.log(data);
                    expect(data).toBe(25);
                    
                    done();
                }
                catch(error){
                    done(error);
                }
            });
        
    });

    it('should return error for invalid range',done=>{
        
        let e = findPrimesEvent(10,1);
        
            e.on('error',(error)=>{
                try{
                    
                    console.log(error.message);
                    expect(error.message).toMatch(/Invalid Range*/);
                    done();
                }
                catch(err){
                    done(err);
                }
            });
        
    });
    xit('It should have emitted prime events 4 times between 2 and 10',done=>{
        
        let e = findPrimesEvent(2,10);
        
            e.on('prime',(data)=>{
                try{
                    
                    console.log(data);
                    expect(data.index).toBe(4);
                    console.log('callback is called');
                    done();
                }
                catch(error){
                    done(error);
                }
            });
        
    });
})