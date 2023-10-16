function missingNumber(array, n) {

    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = array.reduce((acc, num) => acc + num, 0);
    const missing = expectedSum - actualSum;

    return missing;
}

const arr = [1, 2, 3, 5];
const n = 5;
const result = missingNumber(arr, n);
console.log("The missing number is:", result);
