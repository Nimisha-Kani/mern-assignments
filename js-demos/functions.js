
function findEvens(arr){
    var newArr=[];
    for(num of arr){
        if(num%2==0){
            newArr.push(num);
        }
    }
    return(newArr);
}

function findPrimes(arr){
    var newArr=[];
    for(num of arr){
        let flag=0;
        for(let i=2;i<num/2;i++){
            if(num%i==0){
                flag=1;
                break;
            }
            
        }
        if(flag==0){
            newArr.push(num);
        }
    }
    return newArr;
}
function findFactorsOf3And5(arr){
    var newArr = [];
    for(num of arr){
        if(num%3==0 && num%5==0){
            newArr.push(num);
        }
    }
    return newArr;
}

let array=[ 2,9,11,15,8,45,31,23,10 ];
let evens= findEvens(array);
console.log("even numbers ",evens);

let primes=findPrimes(array);
console.log("Prime numbers ",primes);

let fact3And5= findFactorsOf3And5(array);
console.log("Factors of 3 and 5 ",fact3And5);