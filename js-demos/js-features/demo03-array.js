
let array=[2,true,'abc',2.5]; //array can hold any value

console.log('array',array); //we can display the array

//we can access array items using 0 based index

console.log('array[0]',array[0]);

console.log('array[2]',array[2]);

//we can change the value

array[2]='xyz';

console.log('array',array);


//we can use loop to loop throug the items

//for loop
for(var i=0;i<array.length;i++){
    console.log('array['+i+']',array[i]);    
}

//for-of loop

for(var value of array)
    console.log(value);


//we can append new items

array.push(100);
array.push(-10);

console.log('array',array);


//we can remove items from the array

array=array.splice(2,3); //take three items from index 2 : xyz, 2.5, 100

console.log('array after splice',array);


//javascript doesn't support negative index like python
console.log('array[-1]',array[-1]);

//javascript doesn't complain with error for accessing out of bounds index. It simply returns undefined

console.log('array[10]',array[10]);

//javascript doesn't complain if we add a new value at out of bounds index. 
//It will expand the array and add the value at the right index and

//currently we have three items:  'xyz' , 2.5, 100
array[10]='end';  //now we have an array:  'xyz', 2.5, 100, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 'end'

console.log('array',array);

console.log('array[5]',array[5]);





