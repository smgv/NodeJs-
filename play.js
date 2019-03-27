var  name = "Ganesh";
var age = 22;
var hasHobby = true;

// Traditional way
function summarizeUser(name, age, hasHobby){
    return ("username is " + name + " , age is " + age + " and the user has Hobby " + hasHobby);
}

const addFunc = function(a,b,c){
    return a + b + c;
}

const addReturn = (a,b,c) => {
    return a + b + c;
}

const addBrace = (a,b,c) => a + b + c;

const add = a => a + 1;

const addRandom = () => 1+2;

console.log(summarizeUser(name,age,hasHobby)); // simple Function
// Function using Arrow Function
console.log(addFunc(1,2,3)); // Simple Function with different way
console.log(addReturn(1,2,3)); // Function without return statement
console.log(addBrace(1,2,3)); // Function without Bracket
console.log(add(1)); // simple Function with single arg
console.log(addRandom()); // with no arg


