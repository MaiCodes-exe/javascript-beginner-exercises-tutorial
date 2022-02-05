var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array -> [7,11,13,33]
    significant_other: person2   //Object, yes the same variable/object defined after
};
var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};
var person3 ={
    name: "Jimmy",
    lastname: "Doe",
    age: 13,
    gender: "male",
    lucky_numbers: [ 1, 2, 3, 4],
    significant_other: null
}
var family = {
    lastname: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};
function addAllFamilyLuckyNumbers(anArray){
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    for (let i = 0; i < anArray.length; i++){
        for (let a = 0; a < anArray[i].lucky_numbers.length; a++){
            sumOfAllLuckyNumbers += anArray[i].lucky_numbers[a];
            //console.log(sumOfAllLuckyNumbers);
        }
    }
    //console.log(sumOfAllLuckyNumbers)
    return sumOfAllLuckyNumbers;
}
//Enter all your code here:
person.lucky_numbers[3] = 33;
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members));
// Output should be 94