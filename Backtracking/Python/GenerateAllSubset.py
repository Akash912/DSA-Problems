# Generate All Subsets (Power Set) Using Backtracking
# Problem Statement:
# Given an array of unique integers, generate all possible subsets (the power set).
# Example Output for [1, 2, 3]
# [1, 2, 3]
# [1, 2]
# [1, 3]
# [1]
# [2, 3]
# [2]
# [3]
# []

def generate_subsets(arr, index=0, current_subset=[]):
    if index == len(arr):  # Base case: reached end of array
        print(current_subset)  # Print the current subset
        return

    # Include the current element
    generate_subsets(arr, index + 1, current_subset + [arr[index]])

    # Exclude the current element
    generate_subsets(arr, index + 1, current_subset)

# Test case
arr = [1, 2, 3]
generate_subsets(arr)
