// 📌 Problem Statement:
// Given an array and a target value, implement Linear Search to find the index of the target. If the target is not found, return -1.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

// Example Usage:
let arr = [10, 20, 30, 40, 50];
let target = 30;
console.log(linearSearch(arr, target)); // Output: 2

target = 100;
console.log(linearSearch(arr, target)); // Output: -1

// This runs in O(n) time complexity since we iterate through the array at worst case. 🚀