// Given an array arr[] of integers, segregate even and odd numbers in the array such that all the even numbers should be present first, and then the odd numbers.

// Examples:  

// Input: arr[] = {7, 2, 9, 4, 6, 1, 3, 8, 5}
// Output: 2 4 6 8 7 9 1 3 5

// Input: arr[] = {1, 3, 2, 4, 7, 6, 9, 10}
// Output:  2 4 6 10 7 1 9 3

function segregateEvenOdd(arr) {
    let left = 0; // Pointer for the left side of the array
    let right = arr.length - 1; // Pointer for the right side of the array
  
    while (left < right) {
      // Move the left pointer to the right until an odd number is encountered
      while (arr[left] % 2 === 0 && left < right) {
        left++;
      }
  
      // Move the right pointer to the left until an even number is encountered
      while (arr[right] % 2 === 1 && left < right) {
        right--;
      }
  
      // Swap the elements at left and right pointers
      if (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
  }
  
  const arr = [12, 34, 45, 9, 8, 90, 3];
  segregateEvenOdd(arr);
  
  console.log(arr); // Output: [12, 34, 8, 90, 45, 9, 3]
  