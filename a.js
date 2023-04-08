let firstName="Kevin"; 
let lastName="Patrick";
//console.log("Name: "+firstName+" "+lastName+"\n Email:"+firstName+"_"+lastName+"@abc.com");
console.log(`Name:${firstName}`);
console.log(3n==2n);
// read from the global registry
let empid = Symbol.for("empno"); // if the symbol did not exist, it is created
// read it again (maybe from another part of the code)
let empidAgain= Symbol.for("empno");
// the same symbol
console.log( empid === empidAgain ); // false

