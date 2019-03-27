const fetchData = callback => {
    setTimeout(() => {
        callback("Done");
    },1500);
}

setTimeout(() => {
    console.log("Time is Done");
    fetchData(text1 => {
        console.log(text1);
    });
}, 2000);

console.log("Hello");





