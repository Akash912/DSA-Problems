// 📌 Problem Statement:
// Given an array of integers, count how many times each element appears in the array.


import java.util.HashMap;

public class FrequencyCounter {
    public static HashMap<Integer, Integer> countFrequencies(int[] arr) {
        HashMap<Integer, Integer> frequencyMap = new HashMap<>();

        for (int num : arr) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }

        return frequencyMap;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4};
        System.out.println(countFrequencies(nums));
        // Output: {1=1, 2=2, 3=3, 4=4}
    }
}

// 🚀 Time Complexity:
// JavaScript, Python, and Java: O(n) (since we traverse the array once).
// Space Complexity: O(n) (due to storing counts in a dictionary/map).