# How Bubble Sort Works
# Compare adjacent elements and swap them if they are in the wrong order.
# Repeat the process for the entire array.
# Largest elements "bubble" to the end of the array after each pass.
# If no swaps occur in a full pass, the array is already sorted.
# Time Complexity
# Worst & Average Case: O(n²) (nested loops)
# Best Case: O(n) (already sorted array with an optimized version)
# Space Complexity: O(1) (in-place sorting)

def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]  # Swap
    return arr

# Example Usage:
print(bubble_sort([5, 2, 9, 1, 5, 6]))  
# Output: [1, 2, 5, 5, 6, 9]
