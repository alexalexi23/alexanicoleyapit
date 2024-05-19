
// 1)
function calculateRectangleArea(length, width) {
    console.log(length*width) 
}

// Testing the function by invoking or calling it.
calculateRectangleArea(5, 8)
// If the arguments are 5 and 8, the expected output is 40


// 2)
    function reverseString(str) {
        let splitString = str.split("")
        let reverseArray = splitString.reverse();
        let joinArray = reverseArray.join("");
        return joinArray
    }

// Testing the function or invoking of the function
console.log(reverseString("hello")); // Output: "olleh"


// 3)

function generateRandomNumber(min, max) {
    return Math.floor(Math.random()*max - min + 1)
}

// Testing the function by invoking or calling it.
console.log(generateRandomNumber(1, 10)); // Output: Random number between 1 and 10


// 4)

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count ++;
        }
    }
    return count;
}

// Testing the function by invoking or calling it.
console.log(countVowels("hello")); // Output: 2

// 5)
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return ("Even")
    } else {
        return ("Odd")
    }
}

// Testing the function by invoking or calling it.
console.log(checkEvenOrOdd(7));  // Output: Odd
console.log(checkEvenOrOdd(10)); // Output: Even

