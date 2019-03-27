const hobbies = ['Sports', 'cooking', 'Painting'];
const result = hobbies.filter(filterHobbies);

for(let x of hobbies){
    console.log(x);
}

function filterHobbies(value){
    return value == "cooking";
}

console.log(hobbies.map(hobby => "Hobbies :" + hobby));
// Array Methods
// 1. push and Pop
hobbies.push("Dancing");
console.log("pop() " + hobbies);
hobbies.pop();
console.log("pop()" + hobbies);

console.log(result);
// 2. slice
const copyArr1 = hobbies.slice();
console.log("slice() " + copyArr1);

//3. shift() remove element from start
hobbies.push("swim");
const copyArr2 = hobbies.shift();
console.log("shift() " + copyArr2 + hobbies);

//4. unshift() add element at start
const copyArr3 = hobbies.unshift("cricket");
console.log("unshift() " + copyArr3 + hobbies);

// spread operator it take all elements from hobbies and put it in []
// it can be used with object and array 
const copyArr = [...hobbies];
console.log(copyArr);

const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(toArray(1,2,3,4));

// now using with REST opeartor
const toArray1 = (...arg) => {
    return arg;
}

console.log(toArray1(1,2,3,4,5));



