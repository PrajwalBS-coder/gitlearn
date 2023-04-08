calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));
// 1000
trip = place => "Trip to " + place;
console.log(trip("Paris"));
// Trip to Paris
function showNumbers(x, y, ...z) {
    return z;
}
console.log(showNumbers(1, 2, 3, 4, 5)); // [3,4,5]
console.log(showNumbers(3, 4, 5, 6, 7, 8, 9, 10)); // [5,6,7,8,9,10]
