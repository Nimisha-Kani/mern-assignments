
function sum(a,b){
    return a+b;
}

console.log('sum(2,3)',sum(2,3));
//function doesn't know the data type passed to it
//it is programmer's job to make sure they pass the right value
console.log('sum("a","b")',sum("a","b"));

//else you may end up getting unexpected results
console.log('sum(true,false)',sum(true,false)); // true(1)+false(0)=1


//you may pass more arguments that the number of parameters (unlike other languages including python)
console.log('sum(1,2,3,4,5,6)',sum(1,2,3,4,5,6)); //js ignores extra arguments passed


//you may also pass lesser number of arguments than required.
console.log('sum(1)',sum(1)); // => sum(1,undefined) => 1+ undefined => NaN (Not a number)








