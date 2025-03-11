# 📌 Problem Statement:
# Given an array of integers, count how many times each element appears in the array.

def count_frequencies(arr):
    frequency_map = {}

    for num in arr:
        frequency_map[num] = frequency_map.get(num, 0) + 1

    return frequency_map

# Example Usage:
print(count_frequencies([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]))
# Output: {1: 1, 2: 2, 3: 3, 4: 4}

# 🚀 Time Complexity:
# JavaScript, Python, and Java: O(n) (since we traverse the array once).
# Space Complexity: O(n) (due to storing counts in a dictionary/map).