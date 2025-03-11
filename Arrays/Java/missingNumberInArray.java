// 📌 Problem Statement:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number in the sequence.

public class MissingNumber {
    public static int findMissingNumber(int[] arr) {
        int n = arr.length;
        int expectedSum = n * (n + 1) / 2; // Sum of first n natural numbers
        int actualSum = 0;
        
        for (int num : arr) {
            actualSum += num; // Sum of array elements
        }
        
        return expectedSum - actualSum; // Missing number
    }

    public static void main(String[] args) {
        int[] nums1 = {3, 0, 1};
        System.out.println(findMissingNumber(nums1)); // Output: 2

        int[] nums2 = {9, 6, 4, 2, 3, 5, 7, 0, 1};
        System.out.println(findMissingNumber(nums2)); // Output: 8
    }
}

// 🚀 Time Complexity Analysis
// Summation Approach: O(n) time, O(1) space.