# 📌 Problem Statement:
# Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number in the sequence.

def missing_number(arr):
    n = len(arr)
    expected_sum = n * (n + 1) // 2  # Sum of first n natural numbers
    actual_sum = sum(arr)  # Sum of array elements
    return expected_sum - actual_sum  # Missing number

# Example Usage:
print(missing_number([3, 0, 1]))  # Output: 2
print(missing_number([9, 6, 4, 2, 3, 5, 7, 0, 1]))  # Output: 8

# 🚀 Time Complexity Analysis
# Summation Approach: O(n) time, O(1) space.