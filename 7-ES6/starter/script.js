var name5 = "Vincenzo Iannucci";
name5 = "Mammt";
console.log(name5);

///  ES6
const name6 = "Vincenzo Iannucci";
let age6 = 23;
//name6 = "Vincenzo Cicatelli";
console.log(name6);

function ES5driverlLicence(passedTest) {
    if (passedTest) {
        var firstName = "John"; 
        var yearOfBirth = 1990;
    }
    console.log(firstName + " birth in: " + yearOfBirth);
}

ES5driverlLicence(true);

function ES6driverlLicence(passedTest) {
    let firstName, yearOfBirth;
    if (passedTest) {
        firstName = "John";
        yearOfBirth = 1990;
    }
    console.log(firstName + " birth in: " + yearOfBirth);
}

ES6driverlLicence(true);