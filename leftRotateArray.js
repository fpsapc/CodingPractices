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
  