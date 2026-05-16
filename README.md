# typescript_problem6

LargestRectangleAreaBruteForce

# Largest Rectangle in Histogram (Brute Force)

## Overview

This project implements a brute force solution for the **Largest Rectangle in Histogram** problem – finding the maximum area rectangle that can be formed within a histogram where each bar has a given height.

## Problem Statement

Given an array of integers representing the heights of bars in a histogram, find the area of the largest rectangle that can be formed using consecutive bars.

### Example

For the input: [6, 2, 5, 4, 5, 1, 6]

The algorithm calculates the maximum rectangular area possible within the histogram.

## How It Works

The brute force approach considers every possible pair of bars (i, j) where i is the starting index and j is the ending index:

1. Iterate through each starting index i from 0 to n-1
2. For each i, iterate through each ending index j from i to n-1
3. Find the minimum height between indices i and j
4. Calculate the area = minimum height × width (j - i + 1)
5. Track the maximum area found

## Complexity

- Time: O(n²) – checks every possible subarray
- Space: O(1) – only uses a few variables

## Prerequisites

- Node.js (version 12 or higher)
- TypeScript

## Setup and Execution

1. Save the code in a file named largestRectangleBruteForce.ts

2. Install TypeScript:
   npm install -g typescript

3. Compile the file:
   tsc largestRectangleBruteForce.ts

4. Run the compiled file:
   node largestRectangleBruteForce.js

## Usage

const heights = [6, 2, 5, 4, 5, 1, 6];
const result = largestRectangleAreaBruteForce(heights);
console.log(result); // Output: 12

## Test Cases

Empty array: [] -> 0
Single bar: [7] -> 7
All equal: [4, 4, 4, 4] -> 16
Increasing: [1, 2, 3, 4, 5] -> 9
Decreasing: [5, 4, 3, 2, 1] -> 9
With zeros: [3, 0, 3, 2, 1] -> 4

## Step-by-Step Example

For heights = [6, 2, 5, 4, 5, 1, 6]:

- i=0, j=0: min=6, width=1, area=6
- i=0, j=1: min=2, width=2, area=4
- i=0, j=2: min=2, width=3, area=6
- i=0, j=3: min=2, width=4, area=8
- i=0, j=4: min=2, width=5, area=10
- i=0, j=5: min=1, width=6, area=6
- i=0, j=6: min=1, width=7, area=7
- i=1, j=1: min=2, width=1, area=2
- i=1, j=2: min=2, width=2, area=4
- i=1, j=3: min=2, width=3, area=6
- i=1, j=4: min=2, width=4, area=8
- i=1, j=5: min=1, width=5, area=5
- i=1, j=6: min=1, width=6, area=6
- i=2, j=2: min=5, width=1, area=5
- i=2, j=3: min=4, width=2, area=8
- i=2, j=4: min=4, width=3, area=12 ← Maximum
- i=2, j=5: min=1, width=4, area=4

Maximum area = 12

## Features

- Simple and easy to understand
- Correct solution – always finds the maximum
- No extra memory usage
- Handles edge cases (empty array, single element)

## Limitations

- Inefficient for large inputs – O(n²) time complexity
- Not suitable for arrays larger than 10,000 elements
- Consider using stack-based O(n) solution for production use

## Alternative Approaches

- Stack-based (O(n)): More efficient for large datasets
- Divide and Conquer (O(n log n)): Another optimized approach
