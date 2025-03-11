# nums1 = [1,2,3,0,0,0], m = 3
# nums2 = [2,5,6], n = 3
# output - [1,2,2,3,5,6]
def merge(nums1, m, nums2, n):
    i = m - 1  # Pointer for last valid element in nums1
    j = n - 1  # Pointer for last element in nums2
    k = m + n - 1  # Pointer for merging at the end of nums1

    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1
        k -= 1

# Example Input
nums1 = [1, 2, 3, 0, 0, 0]  # nums1 has extra space at the end for merging
m = 3
nums2 = [2, 5, 6]
n = 3

merge(nums1, m, nums2, n)

# Expected Output
print(nums1)  
# Output: [1, 2, 2, 3, 5, 6]
