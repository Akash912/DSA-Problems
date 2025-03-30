// Problem Statement: Largest Contiguous Subarray Sum
// Problem Description
// Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.

// A subarray is a contiguous part of an array, meaning the elements must be consecutive.

// Example 1:
// Input:

// plaintext
// Copy
// Edit
// nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output:

// plaintext
// Copy
// Edit
// 6
// Explanation:
// The subarray [4, -1, 2, 1] has the largest sum of 6.

function maxSubarray(nums) {
    let maxSum = -Infinity;  // Initialize with -Infinity
    let currentSum = 0;  // Start with zero

    for (let num of nums) {
        if (currentSum + num > num) {
            currentSum += num;  // Extend the subarray
        } else {
            currentSum = num;  // Restart the subarray
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;  // Update max sum if needed
        }
    }

    return maxSum;
}

// Example Usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(nums));


// Expected Output: 6
// Explanation: The subarray [4, -1, 2, 1] has the maximum sum of 6.
