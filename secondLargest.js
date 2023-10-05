// Input: arr[] = {12, 35, 1, 10, 34, 1}
// Output: The second largest element is 34.
// Explanation: The largest element of the 
// array is 35 and the second 
// largest element is 34
// Input: arr[] = {10, 5, 10}
// Output: The second largest element is 5.
// Explanation: The largest element of 
// the array is 10 and the second 
// largest element is 5
// Input: arr[] = {10, 10, 10}
// Output: The second largest does not exist.
// Explanation: Largest element of the array 
// is 10 there is no second largest element

function secondLargest(arr, n) {
    let largest = arr[0];
    let secondLargest = -1;
    for(let i=1; i < n; i++) {
        if(arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest === -1 ? -1 : secondLargest;
}

let arr = [12, 35, 1, 10, 34, 1];
let n = arr.length;
let result = secondLargest(arr, n);
console.log(result);