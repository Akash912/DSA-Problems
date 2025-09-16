// 📌 Problem Statement:
// Given an integer array nums, rotate the array to the right by k steps, 
// where k is non-negative. The rotation should be done in-place.

// 📌 Approach:
// We use the reversal algorithm for array rotation.
// 1. Reverse the whole array.
// 2. Reverse the first k elements.
// 3. Reverse the remaining elements.
// This ensures the array is rotated correctly with O(1) extra space.

import java.util.Arrays;

public class RotateArray {

    public static void rotate(int[] nums, int k) {
        k = k % nums.length; // Handle cases where k > nums.length

        // Step 1: Reverse the whole array
        reverse(nums, 0, nums.length - 1);

        // Step 2: Reverse first k elements
        reverse(nums, 0, k - 1);

        // Step 3: Reverse the rest
        reverse(nums, k, nums.length - 1);
    }

    private static void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    // Example Usage:
    public static void main(String[] args) {
        int[] arr1 = {1,2,3,4,5,6,7};
        rotate(arr1, 3);
        System.out.println(Arrays.toString(arr1)); // [5,6,7,1,2,3,4]

        int[] arr2 = {-1,-100,3,99};
        rotate(arr2, 2);
        System.out.println(Arrays.toString(arr2)); // [3,99,-1,-100]
    }
}

// 🚀 Time Complexity Analysis
// Reversal Approach: O(n) time, O(1) space.
