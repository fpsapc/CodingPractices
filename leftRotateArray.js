// Given an array arr[] of size N, the task is to rotate the array by d position to the left.

// Examples: 

// Input:  arr[] = {1, 2, 3, 4, 5, 6, 7}, d = 2
// Output: 3, 4, 5, 6, 7, 1, 2
// Explanation: If the array is rotated by 1 position to the left, 
// it becomes {2, 3, 4, 5, 6, 7, 1}.
// When it is rotated further by 1 position,
// it becomes: {3, 4, 5, 6, 7, 1, 2}

// Input: arr[] = {1, 6, 7, 8}, d = 3
// Output: 8, 1, 6, 7
function leftRotateArray(arr, d) {
    
    if (arr.length === 0 || d < 0) {
      return arr;
    }
      
    const effectiveRotation = d % arr.length;
     
    const rotatedArray = arr.slice(effectiveRotation).concat(arr.slice(0, effectiveRotation));
  
    return rotatedArray;
  }
  
  
  const arr = [1, 2, 3, 4, 5];
  const d = 2;
  const rotatedArr = leftRotateArray(arr, d);
  console.log(rotatedArr); 
  