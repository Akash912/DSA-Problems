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
    max_sum = float('-inf')  # Initialize to a very small value
    current_sum = 0  # Start with zero

    for num in nums:
        if current_sum + num > num:
            current_sum += num  # Extend the subarray
        else:
            current_sum = num  # Restart the subarray
        
        if current_sum > max_sum:
            max_sum = current_sum  # Update max sum if needed

    return max_sum

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
print(max_subarray(nums))  


# Expected Output: 6
# Explanation: The subarray [4, -1, 2, 1] has the maximum sum of 6.
