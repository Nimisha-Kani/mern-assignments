let num = document.getElementById("number");
let consol = document.getElementById("console");
let numberList = document.getElementById("numberList");
let items = numberList.getElementsByTagName("li");


function createMenuItem(name) {
    let li = document.createElement('li');
    li.textContent = name;
    return li;
}
function addlist(){
    if(num.value !=''){
        
        numberList.appendChild(createMenuItem(num.value));
        num.value.innerHTML = '';
    }
    
    
}
function pushElement(){
    var tab = [];
    
        // add values to the array
    for(var i = 0; i < items.length; i++){
       tab.push(parseInt(items[i].innerHTML));
    }
    console.log("Tab array --inside push elements",tab);
    return tab;
}


function sum(){
    consol.style.display = "block";
    var res= 0;
    var tab = pushElement();
    console.log('tab array ',tab);
    for(i=0;i<tab.length;i++){
        
        res += parseInt(tab[i]);
        console.log(tab[i]);
    }
   
    consol.innerHTML += `<br> Sum is ${res}`;
    
}

function average(){
    var res= 0;
    var tab = pushElement();
    for(i=0;i<tab.length;i++){
        
        res += parseInt(tab[i]);
        
    }
    var avg = res/tab.length;
    
    consol.innerHTML += `<br> Average is ${avg}`;
    consol.style.display = "block";
}

function findMin(){
    var res= 0;
    var tab = pushElement();

    
    // console.log("inside find min",tab);
    var minimum = Math.min(...tab);
    consol.innerHTML += `<br> Smallest element is ${minimum}`;
    consol.style.display = "block";
}

function clearDisplay(){
    
    console.log("inside clear method");
    consol.style.display = 'none';
    numberList.style.display ="none";
    num.value = '';
    
}

function reset(){
    consol.innerHTML = "";
    numberList.innerHTML = "";
}

function refresh(){
    numberList.style.display = "block";
}

