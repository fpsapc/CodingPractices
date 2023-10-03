let arr = [5,0,12,55,0]
let output = [5,12,55,0,0]

function reOrderArray(arr) {
let countNonZero = 0;

for(let i =0; i<arr.length; i++) {
    if(arr[i] !== 0) {
        arr[countNonZero] = arr[i];
        countNonZero++;
    }
}
for(let i= countNonZero; i<arr.length; i++) {
    arr[i] = 0;
}
return arr;
}

console.log(reOrderArray(arr));