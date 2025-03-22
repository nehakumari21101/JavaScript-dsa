// Rotate array by K
// Given an integet array numbs, rotate the array to the right by K steps
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], K=3 -> Output:[5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], K=2 -> Output:[3,99,1,-100];

function rotateArray(nums, k){
    let size = nums.length;

    if(size > k){
        k = k%size;
    }

    const rotated = nums.splice(size - k, size);
    nums.unshift(...rotated);

    return nums;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7]));