// Second Largest Number
// Given an array Arr of size N, print second largest distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1] --->> Output: 34
// Input: [10, 5, 10]            --->> Output: 5

function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr));

    uniqueArr.sort((a,b) => {
        return b-a;
    })

    if(uniqueArr.length >= 2){
        return uniqueArr[1];
    }else {
        return -1;
    }
}
console.log(secondLargest([12, 35, 1, 10, 34, 1]))