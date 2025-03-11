// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3
// output - [1,2,2,3,5,6]
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;  // Pointer for last valid element in nums1
    let j = n - 1;  // Pointer for last element in nums2
    let k = m + n - 1; // Pointer for merging at the end of nums1

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};

// Example Input
let nums1 = [1, 2, 3, 0, 0, 0]; // nums1 has extra space at the end for merging
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);

// Expected Output
console.log(nums1); 
// Output: [1, 2, 2, 3, 5, 6]
