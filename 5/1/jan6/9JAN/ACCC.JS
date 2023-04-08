let arr = ["first", "second", "third"];
console.log(arr[0]); //first
console.log(arr[1]); //second
console.log(arr[3]); //undefined
let colors = ["Red", "Orange", "Green"];
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
//Red
//Orange
//Green
let myArray = ["Android", "iOS", "Windows"];

//inserts at index 1

myArray.splice(1, 3, "Linux"); 

console.log(myArray); 

// ["Android","Linux", "iOS", "Windows"]