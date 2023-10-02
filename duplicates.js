let arr = [1,2,3,4,5,6,7,8,9,10,10,11,11,12,12,10,11];

function FindDuplicates(arr) {
    let uniqueElement = new Set();
    let duplicate = []

    for (const item of arr) {
        if(uniqueElement.has(item)) {
            duplicate.push(item);
            console.log("item in duplicate array", item);
        }
        else {
            uniqueElement.add(item);
            console.log("item in unique set", item);
        }
    }
    return duplicate.sort((a,b)=> a - b);
}

let result = FindDuplicates(arr);
console.log(result);