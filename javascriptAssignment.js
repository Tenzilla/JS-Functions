//1

function reverseNumber(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverseNumber(32243)));

/* function isPalindrome(str) {
    str = str.trim();
    const reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}
console.log(isPalindrome('nurses run')); */


//2

function isPalindrome(str) {
    str = str.toLowerCase().replace(/\s/g, '');
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('nurses run'));

//3

function combo(str) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }

    return result;
}
console.log(combo('dog'));

//4

function sortAlphabetically(str) {
    return str.split('').sort().join('');
}

console.log(sortAlphabetically('webmaster'));

//6

/* function upperCase(str) {
    str = str.charAt(0).toUpperCase();
    return str;
}
console.log(upperCase('hey there')); */

function capitalize(str) {
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    return words.join(' ');
}
console.log(capitalize('welcome to new york'));

//6

function findLongestWord(str) {
    const words = str.split(' ');
    let longestLength = 0;
    let longestWord = '';
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length;
        if (wordLength > longestLength) {
            longestLength = wordLength;
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord('Web Development Tutorial'));

//7

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels('The quick brown fox'));

//8

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));

//9

function getType(arg) {
    return typeof arg;
}
console.log(getType("Hello"));
console.log(getType(123));

//10

function generateIdentityMatrix(n) {
    let identityMatrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            if (i === j) {
                row.push(1);
            } else {
                row.push(0);
            }
        }
        identityMatrix.push(row);
    }
    return identityMatrix;
}
console.log(generateIdentityMatrix(3));

//11

function findSecondLowestAndGreatest(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    let secondLowest = arr[1];
    let secondGreatest = arr[arr.length - 2];
    return [secondLowest, secondGreatest];
}

console.log(findSecondLowestAndGreatest([1, 2, 3, 4, 5]));

//12

function isPerfect(number) {
    let divisors = [];
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    let sum = divisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum === number;
}

console.log(isPerfect(6));
console.log(isPerfect(28));

//13

function getFactors(number) {
    let factors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(getFactors(12));

//14

function amountToCoins(amount, coins) {
    let result = [];
    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            result.push(coins[i]);
            amount -= coins[i];
        }
    }
    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

//15

function power(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(power(2, 5));

//16

function uniqueCharacters(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        if (result.indexOf(string.charAt(i)) === -1) {
            result += string[i];
        }
    }
    return result;
}

console.log(uniqueCharacters('thequickbrownfoxjumpsoverthelazydog'));

//17

function letterOccurrences(string) {
    let result = {};
    for (let i = 0; i < string.length; i++) {
        if (result[string.charAt(i)]) {
            result[string.charAt(i)]++;
        } else {
            result[string.charAt(i)] = 1;
        }
    }
    return result;
}

console.log(letterOccurrences('thequickbrownfoxjumpsoverthelazydog'));

//18

function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === value) {
            return middle;
        } else if (arr[middle] < value) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return -1;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchValue = 7;

const index = binarySearch(array, searchValue);
console.log(index);

//19

function largerThanNumber(arr, number) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number) {
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(largerThanNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

//20

function generateStringID(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}
console.log(generateStringID(8));


//21

function getSubsetsOfLength(arr, length) {
    if (length > arr.length) {
        return [];
    }

    const result = [];

    function recurse(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push(currentSubset.slice());
            return;
        }

        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            recurse(currentSubset, i + 1);
            currentSubset.pop();
        }
    }

    recurse([], 0);

    return result;
}
console.log(getSubsetsOfLength([1, 2, 3], 2));

//22

function countLetterOccurrences(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}
console.log(countLetterOccurrences("microsoft.com", "o"));

//23

function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatedChar('abacddbec'));

//24

function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([4, 2, 7, 1, 9, 5]));

//25

function longestCountryName(countryNames) {
    let longestName = "";
    for (let i = 0; i < countryNames.length; i++) {
        if (countryNames[i].length > longestName.length) {
            longestName = countryNames[i];
        }
    }
    return longestName;
}
console.log(longestCountryName(["Australia", "Germany", "United States of America"]));

//26

function longestSubstringWithoutRepeatingCharacters(str) {
    let maxLength = 0;
    let start = 0;
    let charMap = {};

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i];
        if (currentChar in charMap && charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        } else {
            maxLength = Math.max(maxLength, i - start + 1);
        }
        charMap[currentChar] = i;
    }

    return str.slice(start, start + maxLength);
}

console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb"));

//27

function longestPalindromicSubstring(str) {
    let longestSubstring = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            let substring = str.slice(i, j + 1);
            if (isPalindrome(substring) && substring.length > longestSubstring.length) {
                longestSubstring = substring;
            }
        }
    }
    return longestSubstring;
}

//28 

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(longestPalindromicSubstring("babad"));

//29

function myFunction() {
    console.log("Hello World!");
}

console.log(myFunction.name);

