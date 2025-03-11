import java.util.Arrays;

public class MergeSortedArrays {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;  // Pointer for last valid element in nums1
        int j = n - 1;  // Pointer for last element in nums2
        int k = m + n - 1; // Pointer for merging at the end of nums1

        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }

    public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 0, 0, 0}; // nums1 has extra space for merging
        int m = 3;
        int[] nums2 = {2, 5, 6};
        int n = 3;

        merge(nums1, m, nums2, n);

        // Expected Output: [1, 2, 2, 3, 5, 6]
        System.out.println(Arrays.toString(nums1));
    }
}
