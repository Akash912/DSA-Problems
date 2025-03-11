# 📌 Problem Statement:
# Given a sorted array and a target value, implement Binary Search to find the index of the target. If the target is not found, return -1.

def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid  # Target found, return index
        elif arr[mid] < target:
            left = mid + 1  # Search in the right half
        else:
            right = mid - 1  # Search in the left half

    return -1  # Target not found

# Example Usage:
arr = [10, 20, 30, 40, 50, 60]
target = 30
print(binary_search(arr, target))  # Output: 2

target = 100
print(binary_search(arr, target))  # Output: -1


# 🚀 Python Implementation (Binary Search - Recursive)

def binary_search_recursive(arr, left, right, target):
    if left > right:
        return -1  # Base case: Target not found

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid  # Target found
    elif arr[mid] < target:
        return binary_search_recursive(arr, mid + 1, right, target)  # Search right half
    else:
        return binary_search_recursive(arr, left, mid - 1, target)  # Search left half

# Example Usage:
arr = [10, 20, 30, 40, 50, 60]
target = 30
print(binary_search_recursive(arr, 0, len(arr) - 1, target))  # Output: 2


# 🛠️ Complexity Analysis:
# Binary Search (Iterative & Recursive): O(log n) (much faster than O(n) for large inputs)
# Space Complexity: O(1) for iterative, O(log n) for recursive (due to function call stack)