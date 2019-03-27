const person = {
    name : "Ganesh",
    age : 22,
    gender : "M",
    fullDetails() {
        return this.name + this.age + this.gender;
    },

    userName : function() { return "UserName is " + this.name }
    
};

console.log(person.name);
console.log(person["name"]);
console.log(person.fullDetails());
console.log(person.userName());
console.log(person);
console.log("=================================================");
const copiedperson = {person};
console.log(copiedperson);
console.log("=================================================");
//with spread operator
const copiedperson1 = {...person};
console.log(copiedperson1);