function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

// Example Usage:
console.log(bubbleSort([5, 2, 9, 1, 5, 6]));  
// Output: [1, 2, 5, 5, 6, 9]


// How Bubble Sort Works
// Compare adjacent elements and swap them if they are in the wrong order.
// Repeat the process for the entire array.
// Largest elements "bubble" to the end of the array after each pass.
// If no swaps occur in a full pass, the array is already sorted.
// Time Complexity
// Worst & Average Case: O(n²) (nested loops)
// Best Case: O(n) (already sorted array with an optimized version)
// Space Complexity: O(1) (in-place sorting)