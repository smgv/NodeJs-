const person = {
    name : "Ganesh",
    age : 22,
    gender : "M",
    fullDetails() {
        return this.name + this.age + this.gender;
    },

    userName : function() { return "UserName is " + this.name }
    
};

const printuser = (persondata) =>
{
    console.log(persondata.name);
}

printuser(person);

//object Destructuring
const printUser = ({ name }) =>
{
    console.log(name);
}

printUser(person);

const {name, age} = person;
console.log(name, age);

//Array Destructuring
const hobbies = ['Sports', 'cooking', 'Painting'];
const [h1, h2] = hobbies;
console.log(h1, h2);

