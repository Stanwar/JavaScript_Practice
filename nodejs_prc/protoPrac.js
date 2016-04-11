// Prototypes and function expression
function Person(firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.greet = function(){
	console.log("Hello, " + this.firstName + " " + this.lastName);	
};
var John = new Person("John", "Doe");
var Jane = new Person("Jane", "Doe");
John.greet();
Jane.greet();
