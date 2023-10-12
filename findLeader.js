function findLeaders(arr) {
    const n = arr.length;
    let maxRight = arr[n - 1];
    const leaders = [maxRight];
  
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] >= maxRight) {
        maxRight = arr[i];
        leaders.push(arr[i]);
      }
    }
  
    return leaders.reverse(); 
  }
  
  const arr = [16, 17, 4, 3, 5, 2];
  const leaders = findLeaders(arr);
  console.log("Leaders in the array:", leaders); 
  