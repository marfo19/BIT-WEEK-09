// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!

// 1. Write a function that checks if a given string contains 5 digits.
// Input: “1b8952abd”
// Output: true
// 1A. Modify previous task to check if it contains char or number "5".
console.log("***1***");

function checkDig1(string1) {
    let count1 = 0;
    // let result1;
    for (let i = 0; i < string1.length; i++) {
        if (parseInt(string1[i]) >= 0) {
            count1++;
        }
    }
    if (count1 === 5) {
        // result1 = true;
        return true;
    } else {
        // result1 = false;
        return false;
    }
    // return result1;
}

console.log(checkDig1("1b8952abd"));
console.log("\n");

// Input: “1bser9re”
// Output: false
console.log("***1A***");

function checkDig1a(string1A) {
    let result1A;
    for (let i = 0; i < string1A.length; i++) {
        if (string1A[i] === "5") {
            result1A = true;
            break;
        } else {
            result1A = false;
        }
    }
    return result1A;
}
console.log(checkDig1a("1bser5re"));
console.log("\n");

// 2. Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’.
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”
console.log("***2***");

function replace2(string2, stars2) {
    let newString2 = string2.replace(/JS/g, stars2);
    return newString2;
}

console.log(replace2("Programming in JS is super interesting!", "**"));
console.log("\n");
// 3. Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’
// Output: “Good morning”
console.log("***3***");

function insertChar3(string3, num3, char3) {
    let newString3 = "";
}

console.log("\n");
// 4. Write a function that deletes a character from the given position in the string.
// Input: “Goodd morning!”, 3
// Output: “Good morning!”
console.log("***4***");

function delete4(string4, num4) {
    let result4 = string4.slice(0, num4);
    let result41 = string4.slice(num4 + 1);
    let finalResult4 = result4 + result41;
    return finalResult4;
}

console.log(delete4("Goodd morning!", 3));

console.log("\n");
// 5. Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]
console.log("***5***");

function deleteSecondEL(array) {
    var resArray = [];

    for (var i = 0; i < array.length; i = i + 2) {
        resArray.push(array[i]);
    }

    return resArray;
}

console.log(deleteSecondEL([3, 5, 1, 8, 90, -4, 23, 1, 67]));

console.log("\n");