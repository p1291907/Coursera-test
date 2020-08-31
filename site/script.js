// Defining Variables globally 
var message = "In global!";
console.log("global: message = " + message);
//defining function a
var a = function(){
	var message="inside a";
	console.log("a: message = " + message);
// calling function b second
	b();
}
//defining function b
function b (){
	console.log("b: message = " + message);
}
//calling function a first
a();


//String Concantination//
var string = "Hello";
string += " World";
console.log(string + "!");

//Regular Math operators//
console.log((5 + 4)/3);
console.log(undefined / 5);

//Equality//
var x = 4, y = 4;
if(x==y){
	console.log("x='4 is equal to y = 4");
}
x = "4";
if (x == y){
	console.log("x='4' is equal to y=4");
}

//Strict Equality//
if(x===y){
	console.log("Strict: x='4' is equal to y =4");
}
else{
	console.log("Strict: x='4' is NOT equal to y=4");
}


//****************Object Creation****************************//
var company = new Object();
company.name = "Apple";
company.ceo = new Object();
company.ceo.firstName = "Steve";
company.shade = new Object();
company.shade.color = "Red";
console.log(company);
console.log(company.shade.color);
console.log(company["name"]);
var stock = "stock of company";
company[stock] = 110;
console.log(company[stock]);
//*************************Easier way to create object literals*******************//
var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue"
	},
	"stock of company": 110
};
console.log(facebook.ceo.favColor);

//********************************Functions******************************************//
function multiply(x,y) {
	return x * y;
}

multiply.version = "v.1.0.0";
console.log(multiply.version);
//Function factory//
function makeMultiplier(multiplier) {
	var myFunc = function(X) {
		return multiplier * x;
	};
	return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//******************************Function Constructors***************************************//
function Circle (radius){
	this.radius = radius;
	this.getArea =
		function(){
			return Math.PI * Math.pow(this.radius, 2);
		};
}
var myCircle = new Circle(10);
console.log(myCircle);
console.log(myCircle.getArea());

//*******************************Array*************************************************//
var names = ["Parisa", "John", "James"];
for (var i = 0; i<names.length; i++) {
	console.log(" Hello " + names[i]);
}
names[100] = "Jim";
for(var i=0; i<names.length; i++){
	console.log("Hello " + names[i]);
}
var name5 = ["Parisa", "John", "James"];
var myObj = {
	name: "Parisa",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for(var x in myObj){
	console.log(x + ": " + myObj[x]);
}
