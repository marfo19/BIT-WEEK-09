// INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!

// 6. Write a function that replaces the elements of the given array between two positions with their doubled values.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]
console.log("***6***");

var doubledValues = function(array, position_1, position_2) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (i >= position_1 && i <= position_2) {
            newArray[i] = array[i] * 2;
        } else {
            newArray[i] = array[i];
        }
    }
    return newArray;
};

console.log(doubledValues([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

console.log("\n");
//  7. Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions!
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true
console.log("***7***");

var checkEveryEl = (arr1, arr2) => {
    var sortArr1 = arr1.sort((a, b) => {
        return a - b;
    });
    var sortArr2 = arr2.sort((a, b) => {
        return a - b;
    });

    for (var i = 0; i < sortArr1.length; i++) {
        if (sortArr1[i] !== sortArr2[i]) {
            return false;
        }
    }
    return true;
};
console.log(checkEveryEl([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));
console.log("\n");
//  8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’.
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]
console.log("***8***");
console.log("\n");

//  9. Write a function that prints out the date of the next day.
// Output:  25. 10. 2018.

//  10. Write a function that prints out the date of the previous day.
// Output:  23. 10. 2018.

//  11. Write a function that prints out an array of the numbers aligned from the right side.
// Input: [78, 111, 4, 4321]
// Output:
//   78
//  111
//    4
// 4321

console.log("***11***");

console.log("\n");