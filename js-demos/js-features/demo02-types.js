
var a=1;
var b=2.9;
var c='Hello';
var d='x';
var e="world";
var f=`Hello World`;
var g= 20>30;
var h= true;

console.log(a, 'is', typeof(a));
console.log(b, 'is', typeof(b));
console.log(c, 'is', typeof(c));
console.log(d, 'is', typeof(d));
console.log(e, 'is', typeof(e));
console.log(f, 'is', typeof(f));
console.log(g, 'is', typeof(g));
console.log(h, 'is', typeof(h));


var i=new Date();
var j=[1,2,3];
var k=new Object();
var l={};
var m=null;
var n=undefined;
var o;  //implicitly undefined
console.log();
console.log(i, 'is', typeof(i));
console.log(j, 'is', typeof(j));
console.log(k, 'is', typeof(k));
console.log(l, 'is', typeof(l));
console.log(m, 'is', typeof(m)); //is a null object
console.log(n, 'is', typeof(n)); // n is valid reference but value is explicitly undefined
console.log(o, 'is', typeof(o)); //o is avalid reference but value is implictly undefined
console.log(p);  // p is an undefined reference.
