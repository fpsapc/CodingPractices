function thirdLargest(arr) {
    let element = 0;
    let sortedArr = arr.sort((a,b)=>a-b);
    if(sortedArr.length > 3) {
        element = sortedArr[sortedArr.length - 3];
    }
    else {
        "Array should have minimum 3 elements"
    }
    return element;
}

let arr = [0,1,2,3,4,6,7,10,9,11,13,12]
let arr1 = [0,1,2]
let result = thirdLargest(arr1)
console.log(result);