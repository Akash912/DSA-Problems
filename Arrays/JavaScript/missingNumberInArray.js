// 📌 Problem Statement:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number in the sequence.

function missingNumber(arr) {
    let n = arr.length;
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of array elements
    return expectedSum - actualSum; // Missing number
}

// Example Usage:
console.log(missingNumber([3, 0, 1])); // Output: 2
console.log(missingNumber([9,6,4,2,3,5,7,0,1])); // Output: 8

// 🚀 Time Complexity Analysis
// Summation Approach: O(n) time, O(1) space.