// Generate All Subsets (Power Set) Using Backtracking
// Problem Statement:
// Given an array of unique integers, generate all possible subsets (the power set).
// Example Output for [1, 2, 3]
// [1, 2, 3]
// [1, 2]
// [1, 3]
// [1]
// [2, 3]
// [2]
// [3]
// []

using System;
using System.Collections.Generic;

class Program
{
    static void GenerateSubsets(int[] arr, int index, List<int> currentSubset)
    {
        if (index == arr.Length)
        {
            Console.WriteLine($"[{string.Join(", ", currentSubset)}]"); // Print the current subset
            return;
        }

        // Include the current element
        currentSubset.Add(arr[index]);
        GenerateSubsets(arr, index + 1, currentSubset);

        // Exclude the current element (backtrack)
        currentSubset.RemoveAt(currentSubset.Count - 1);
        GenerateSubsets(arr, index + 1, currentSubset);
    }

    static void Main()
    {
        int[] arr = { 1, 2, 3 };
        GenerateSubsets(arr, 0, new List<int>());
    }
}


