// IIFE = Immediately Invoked Function Expressions

// 1. Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]
console.log("1.--------------------------");
(function replace1(array1) {
    var newArray1 = [];

    for (let i = 0; i < array1.length; i++) {
        if (i === 0) {
            newArray1[i] = array1[array1.length - 1];
        } else if (i === array1.length - 1) {
            newArray1[i] = array1[0];
        } else {
            newArray1[i] = array1[i];
        }
    }
    console.log(newArray1);
})([1, 2, 3, 4, 5]);

// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20
console.log("2.--------------------------");

(function calculate2(a, b) {
    console.log(a * b);
})(4, 5);

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2
console.log("3.--------------------------");

(function replace3(word3) {
    var string3 = "";

    for (let i = 0; i < word3.length; i++) {
        if (word3[i] === "m" || word3[i] === "M") {
            string3 += "*";
        } else {
            string3 += word3[i];
        }
    }

    console.log(string3);
})("mprograMmingm");

// 4. Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com
console.log("3.--------------------------");

(function suggest4(name4, surname4) {
    console.log(name4 + "." + surname4 + "@gmail.com");
})("pera", "peric");

// 5. Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28
console.log("3.--------------------------");

(function return5() {});
// 6. Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive
// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]