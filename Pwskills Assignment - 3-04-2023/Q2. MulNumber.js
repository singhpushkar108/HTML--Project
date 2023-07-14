var m=45;
var n=23;
console.log("calling the function before declaration")

console.log(mulNum(m,n));

var mulNum=function(a,b){
	return "Result of the Multiplication of ${a} and ${b}is :" + a*b;
	};