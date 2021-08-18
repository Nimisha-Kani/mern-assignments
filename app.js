let num = document.getElementById("number");
let consol = document.getElementById("console");
let numberList = document.getElementById("numberList");
let items = numberList.getElementsByTagName("li");
var output = '';
function addlist(){
    if(num.value !=''){
        
        output += `<li> ${num.value} </li>`;
    }
    num.value.innerHTML = "none";
    document.getElementById("numberList").innerHTML = output;
    
}

function sum(){
    var res= 0;
    for(i=0;i<items.length;i++){
        
        res += parseInt(items[i]);
        console.log(items[i]);
    }
    consol.innerHTML = `Sum is ${res}`;
}

function average(){
    var res= 0;
    for(i=0;i<items.length;i++){
        
        res += parseInt(items[i]);
        console.log(items[i]);
    }
    var avg = res/items.length;
    consol.innerHTML = `Average is ${avg}`;
}

function clear(){
    consol.style.display = "none";
    
}