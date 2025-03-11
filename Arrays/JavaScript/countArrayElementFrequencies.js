// 📌 Problem Statement:
// Given an array of integers, count how many times each element appears in the array.

function countFrequencies(arr) {
    let frequencyMap = {};

    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    return frequencyMap;
}

// Example Usage:
console.log(countFrequencies([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// Output: { '1': 1, '2': 2, '3': 3, '4': 4 }


// 🚀 Time Complexity:
// JavaScript, Python, and Java: O(n) (since we traverse the array once).
// Space Complexity: O(n) (due to storing counts in a dictionary/map).