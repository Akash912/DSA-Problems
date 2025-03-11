# 📌 Problem Statement:
# Given an array and a target value, implement Linear Search to find the index of the target. If the target is not found, return -1.

def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i  # Return index if found
    return -1  # Return -1 if not found

# Example Usage:
arr = [10, 20, 30, 40, 50]
target = 30
print(linear_search(arr, target))  # Output: 2

target = 100
print(linear_search(arr, target))  # Output: -1


# This runs in O(n) time complexity as it checks each element sequentially. 🚀