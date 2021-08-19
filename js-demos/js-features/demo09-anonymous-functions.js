//step 1. create a function --> this function is added to global/window context
function sum(a,b){
    return a+b;
}
//step 2. assign to a variable ---> this reference is also added to global/window context
var plus=sum;

//now same function is available under both names
console.log('typeof(sum)',typeof(sum));
console.log('typeof(plus)',typeof(plus));
console.log('sum(2,3)',sum(2,3));
console.log('plus(2,3)',plus(2,3));


//can we merge the two steps in one?
//declare a function and assign it to a reference directly
//'minus' is added to global/window context. but substract is assigned directly to minus
//and not attached to global/window context.
var minus = function substract(a,b) {return a-b; }


console.log('typeof(minus)',typeof(minus));
//substract name is not usable.
console.log('typeof(substract)',typeof(substract));


//do we need this name?
//anonymous function --> a function without a name

var multiply= function(a,b){ return a*b; }

console.log('typeof(multiply)',typeof(multiply));

console.log('multiply(11,4)',multiply(11,4));






