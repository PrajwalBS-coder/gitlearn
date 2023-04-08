var counter = 0; 
for (var loop = 0; loop < 5; loop++) { 
    console.log(loop);
    if (loop == 3) 
        continue; 
    counter++; 
console.log(counter);
} 
let workingHours = 9.20; 
let additionalHours; 
(workingHours > 9.15) ? additionalHours = "You have positive additional hours" : additionalHours = "You have negative additional hours"; 
console.log(additionalHours); 
