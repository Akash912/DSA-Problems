Trapping Rain Water

Problem Statement

You are given n non-negative integers representing an elevation map where the width of each bar is 1. Compute how much water it can trap after raining.

Example 1:

Input:

height = [0,1,0,2,1,0,1,3,2,1,2,1]

Output:

6

Explanation:

The elevation map is represented as follows:

    #
    #
#   # #   #
#   # # # #
# # # # # #

In this case, 6 units of rainwater (blue section) are trapped.

Example 2:

Input:

height = [4,2,0,3,2,5]

Output:

9

Explanation:

The elevation map is represented as follows:

#       #
#   #   #
#   # # #
# # # # #

In this case, 9 units of rainwater are trapped.

Constraints:

n == height.length

1 <= n <= 20,000

0 <= height[i] <= 100,000