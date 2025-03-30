# Problem Statement: Largest Contiguous Subarray Sum
# Problem Description
# Given an integer array nums, find the contiguous subarray (containing at least one number) that has the largest sum and return its sum.

# A subarray is a contiguous part of an array, meaning the elements must be consecutive.

# Example 1:
# Input:

# plaintext
# Copy
# Edit
# nums = [-2,1,-3,4,-1,2,1,-5,4]
# Output:

# plaintext
# Copy
# Edit
# 6
# Explanation:
# The subarray [4, -1, 2, 1] has the largest sum of 6.

def max_subarray(nums):
    max_sum = nums[0]  # Initialize max sum with the first element
    current_sum = nums[0]  # Initialize current sum

    for i in range(1, len(nums)):
        current_sum = max(nums[i], current_sum + nums[i])  # Extend or restart subarray
        max_sum = max(max_sum, current_sum)  # Update max sum if needed

    return max_sum

# Example Usage:
nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(max_subarray(nums))  
# Expected Output: 6
# Explanation: The subarray [4, -1, 2, 1] has the maximum sum of 6.
