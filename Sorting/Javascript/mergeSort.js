function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let mid = Math.floor(arr.length / 2); // Find the middle index
    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
    let right = mergeSort(arr.slice(mid)); // Recursively sort right half

    return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]); // Add smaller element
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j)); // Add remaining elements
}

// Example Usage:
let arr = [5, 2, 9, 1, 5, 6];
console.log(mergeSort(arr));  
// Output: [1, 2, 5, 5, 6, 9]


// How Merge Sort Works
// Divide: Recursively split the array into halves until only single elements remain.
// Conquer: Recursively sort both halves.
// Merge: Combine the sorted halves into a single sorted array.
// Time Complexity
// Best, Worst, and Average Case: O(n log n)
// Space Complexity: O(n) (due to auxiliary arrays)