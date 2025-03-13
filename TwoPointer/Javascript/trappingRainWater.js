/**
 * @param {number[]} inpArr - Array representing the elevation map
 * @return {number} - Amount of trapped water
 */
var trap = function(inpArr) {
    let left = 0; // Left pointer
    let right = inpArr.length - 1; // Right pointer
    let leftMax = inpArr[left]; // Maximum inpArr encountered from the left
    let rightMax = inpArr[right]; // Maximum inpArr encountered from the right
    let water = 0; // Variable to store trapped water

    while (left < right) {
        if (leftMax < rightMax) {
            left++; // Move left pointer to the right
            leftMax = Math.max(leftMax, inpArr[left]); // Update left max inpArr
            water = water + leftMax - inpArr[left]; // Calculate trapped water at left
        } else {
            right--; // Move right pointer to the left
            rightMax = Math.max(rightMax, inpArr[right]); // Update right max inpArr
            water = water + rightMax - inpArr[right]; // Calculate trapped water at right
        }
    }

    return water; // Return total trapped water
};

// Example test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
console.log(trap([4,2,0,3,2,5])); // Output: 9
console.log(trap([2,0,2])); // Output: 2
console.log(trap([3,0,2,0,4])); // Output: 7