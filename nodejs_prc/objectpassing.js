//Pass by Reference and Pass by Value
function changeByValue(b){
	b = 2;
}

var a = 1;
changeByValue(a);
console.log(a);
/*
	Primitives in JS are pass by value. Objects in JS are pass by reference and hence will change their state. 
*/

function changeByReference(z){
	z.prop1 = function() {};
	z.prop2 = {};
}

var y = {};
y.prop1 = {};

changeByReference(y);
console.log(y);