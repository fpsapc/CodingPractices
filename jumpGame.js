function minJumpsToEnd(arr) {
    const n = arr.length;
    
    if (arr[0] === 0) {
      return -1;
    }
  
    let maxReach = arr[0];
    let steps = arr[0];
    let jumps = 1;
  
    for (let i = 1; i < n; i++) {
      if (i === n - 1) {
        return jumps;
      }
  
      maxReach = Math.max(maxReach, i + arr[i]);
  
      steps--;
  
      if (steps === 0) {
        jumps++;
  
        if (i >= maxReach) {
          return -1;
        }
  
        steps = maxReach - i;
      }
    }

    return -1;
  }
  
  const arr = [2, 3, 1, 1, 4];
  const result = minJumpsToEnd(arr);
  console.log(result); // Output: 2
  