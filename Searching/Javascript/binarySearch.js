// 📌 Problem Statement:
// Given a sorted array and a target value, implement Binary Search to find the index of the target. If the target is not found, return -1.

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example Usage:
const arr = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(arr, 30)); // Output: 2
console.log(binarySearch(arr, 100)); // Output: -1

// 🚀 JavaScript Implementation (Recursive Approach)
function binarySearchRecursive(arr, left, right, target) {
    if (left > right) return -1; // Base case: Target not found

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid; // Target found
    else if (arr[mid] < target) return binarySearchRecursive(arr, mid + 1, right, target); // Search right half
    else return binarySearchRecursive(arr, left, mid - 1, target); // Search left half
}

// Example Usage:
const arr1 = [10, 20, 30, 40, 50, 60];
console.log(binarySearchRecursive(arr1, 0, arr1.length - 1, 30)); // Output: 2

// 🛠️ Complexity Analysis:
// Binary Search (Iterative & Recursive): O(log n) (much faster than O(n) for large inputs)
// Space Complexity: O(1) for iterative, O(log n) for recursive (due to function call stack)
// This is an efficient way to search in a sorted array. 🚀 Let me know if you need any modifications! 😊