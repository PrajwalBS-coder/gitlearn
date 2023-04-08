let stringJSON = '{"firstName":"Sam","lastName":"Fernandes"}' 
let obj = JSON.parse(stringJSON); 
console.log(obj); 
let k=JSON.stringify(stringJSON)
console.log(k)
//OUTPUT: { firstName: 'Sam', lastName: 'Fernandes' } 
