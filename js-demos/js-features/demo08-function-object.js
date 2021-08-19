function sum(a,b){
    return a+b;
}

//functions are of type 'function'
console.log('typeof(sum)',typeof(sum));


//they can be assined to a variable

var plus=sum;

//now plus can be used as a function
console.log('plus(2,3)',plus(2,3));

//functions are objects like array. they have their own properties
console.log('plus.name',plus.name);  //remember! plus is variable that stores 'sum' function


