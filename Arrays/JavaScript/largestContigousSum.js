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

/**
 * Find the largest sum of a contiguous subarray using Kadane's Algorithm.
 * @param {number[]} nums - The input array.
 * @return {number} - The largest sum of a contiguous subarray.
 */
var maxSubArray = function(nums) {
    let maxSum = nums[0];  // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize current sum

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]); // Extend or restart subarray
        maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is larger
    }
    
    return maxSum;
};

// Example Usage:
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); 
// Expected Output: 6
// Explanation: The subarray [4, -1, 2, 1] has the maximum sum of 6.
