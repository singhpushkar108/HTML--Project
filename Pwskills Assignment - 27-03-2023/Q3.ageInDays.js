function logResult(name,age){
	return `The person's full name is '${name}' and their age in days is '${age}'.`;

}

function ageInDays(object, func){
	var fullName=object.first_name+" "+object.last_name;
	var ageInDays=object.age*365;
	return func(fullName,ageInDays);
}


person={
	first_name:"Pushkar",
	last_name:"Singh",
	age:24
	}

res=ageInDays(person,logResult);
console.log(res);