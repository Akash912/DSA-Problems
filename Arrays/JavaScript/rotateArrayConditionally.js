// 📌 Problem Statement:
// Given an integer array nums, rotate the array to the right by k steps, 
// where k is non-negative. The rotation should be done in-place.

// 📌 Approach:
// We use the reversal algorithm for array rotation.
// 1. Reverse the whole array.
// 2. Reverse the first k elements.
// 3. Reverse the remaining elements.
// This ensures the array is rotated correctly with O(1) extra space.

function rotate(nums, k) {
    k = k % nums.length; // Handle cases where k > nums.length

    // Helper function to reverse part of the array
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    // Step 1: Reverse the whole array
    reverse(0, nums.length - 1);

    // Step 2: Reverse first k elements
    reverse(0, k - 1);

    // Step 3: Reverse the rest
    reverse(k, nums.length - 1);

    return nums;
}

// Example Usage:
console.log(rotate([1,2,3,4,5,6,7], 3)); // Output: [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2));  // Output: [3,99,-1,-100]

// 🚀 Time Complexity Analysis
// Reversal Approach: O(n) time, O(1) space.
