// Given an unsorted array A of size N that contains only positive integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.
// Example 2:

// Input:
// N = 10, S = 15
// A[] = {1,2,3,4,5,6,7,8,9,10}
// Output: 1 5
// Explanation: The sum of elements 
// from 1st position to 5th position
// is 15.

function subArraySum(arr, n, s) {
    let left = 0;
    let right = 0;
    let currentSum = 0;

    if (s === 0) {
        return [-1];
    }

    while (right <= n) {
        if (currentSum === s) {
            return [left + 1, right];
        }

        if (currentSum < s) {
            if (right < n) {
                currentSum += arr[right];
            }
            right++;
        } else {
            currentSum -= arr[left];
            left++;
        }
    }

    return [-1];
}

const A = [1,2,3,4,5,6,7,8,9,10];
const S = 15;
const N = 10;
const result = subArraySum(A, N, S);

if (result[0] === -1) {
    console.log("No subarray found with the given sum.");
} else {
    console.log(`Subarray with the sum ${S} found at indices [${result[0]}, ${result[1]}].`);
}