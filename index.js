//1 
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //creating an array
//1a
let subtraction = ages[ages.length - 1] - ages[0]; //subtracting the value of the first element 
console.log(subtraction); // from the value of the last element
//1b
ages.push(100); // adding new element
let subtraction2 = ages[ages.length - 1] - ages[0];
console.log(subtraction2);

//1c
let sum = 0;
for (let age of ages) {   //calculating a sum of all elements 
    sum += age;
}
console.log(sum / ages.length);
//2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //creating an array of names
//2a
let sum1 = 0;
for (let name of names) {
    sum1 += name.length;
}
console.log(sum1/names.length); // calculating average number of letters per name
//2b
let joined = ' ';
for (let i = 0; i < names.length; i++) {// concatenating the names together separated by spaces
    joined += names[i] + ' ';
}
console.log(joined);
/* 3. To access the last element of an array, we have to indicate it's position, and that will
be [myArray.length - 1].
4. To access the first element of an Array we have to indicate its position that will
be 0, so myArray[0]. */

//5
let nameLenghths = new Array();//creating new Array
for (let i = 0; i < names.length; i++) {
    nameLenghths.push(names[i].length);//adding elements, which are number of letters in each name in names array 
}
console.log(nameLenghths);

//6
let sum2 = 0; // calculating sum of all elements
for (let nameL of nameLenghths) {
    sum2 += nameL;
}
console.log(sum2);

//7
function stringConcat(word, n) {// concatenating string to itself n number of times
let output = ' ';
for (let i = 1; i <= n; i++) {
    output += word;
}
return output;
} 
console.log(stringConcat('Hello', 5));

//8
function createFullName(firstName, lastName) { // creating fullName using firstName and lastName
    let fullName = firstName + ' ' + lastName;
    return fullName;
}
console.log(createFullName('Jack', 'Callahan'));

//9
let numbers = [5, 10, 35, 26, 29, 16]; //function to check if the sum of the elements is > than 100
function sumGreater100(myArray) {
    let sumArray = 0;
    for (let number of numbers) {
        sumArray += number;
    } 
    if (sumArray > 100) {
        return true;
    } else {
        return false;
    }
}
console.log(sumGreater100(numbers));
//10
function arrayAverage(myArray) {// calculating average of all elements in the array
 let sum = 0;
 for (let arrayElement of myArray) {
     sum += arrayElement;
     }  return sum / myArray.length;
}
console.log(arrayAverage(numbers));

//11
function compareAverage(myArray, myArray2) {// checking if the sum of the elements of first array is 
    let sum = 0; // greater than the sum of the elements of the second array
    for (let arrayElement of myArray) {
        sum += arrayElement;
        } 
    let sum2 = 0;
    for (let arrayElement2 of myArray2) {
        sum2 += arrayElement2;
        } 
    if ((sum/myArray.length) > (sum2/myArray2.length)) {
        return true;
    } else {
        return false;
    }
}
console.log(compareAverage(ages, numbers));

//12 
function willBuyDrink(isHotOutside, moneyInPocket) {// buying drink if it's hot outside and have enough money
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
console.log(willBuyDrink(true, 20.6));
// 13 
function workingDays(dayOfWeek) {// function to let the patient know when he is scheduling on a day when the clinic is closed
    if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
        console.log("This day is not within the working days of our clinic. You cannot schedule an appointment.");
     } else {
        console.log("Please choose your appointment time.");
     }
}
console.log(workingDays("Sunday"));