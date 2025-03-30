// Generate All Subsets (Power Set) Using Backtracking
// Problem Statement:
// Given an array of unique integers, generate all possible subsets (the power set).
// Example Output for [1, 2, 3]
// [1, 2, 3]
// [1, 2]
// [1, 3]
// [1]
// [2, 3]
// [2]
// [3]
// []

function generateSubsets(arr, index = 0, currentSubset = []) {
    if (index === arr.length) {
        console.log(currentSubset); // Print the current subset
        return;
    }

    // Include the current element
    generateSubsets(arr, index + 1, [...currentSubset, arr[index]]);

    // Exclude the current element
    generateSubsets(arr, index + 1, currentSubset);
}

// Test case
const arr = [1, 2, 3];
generateSubsets(arr);

