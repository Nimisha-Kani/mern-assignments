function average(){
    var sum=0;

    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }

    return sum/arguments.length;
}

console.log('average(2,10)',average(2,10));     //6
console.log('average(1,2,3,4)',average(1,2,3,4)); //2.5
console.log('average(1,2,3,4,5)',average(1,2,3,4,5)); //3


