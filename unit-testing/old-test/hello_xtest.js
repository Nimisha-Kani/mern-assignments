
const assert = require('assert').strict;

test('This is our first test and it should pass',()=>{

    console.log('hello world from testing');

})


test('This test will fail',()=>{

    //when your assertion fails, your test fails
    assert.equal(2,3);
});