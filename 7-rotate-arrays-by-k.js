// Rotate array by K
// Given an integet array numbs, rotate the array to the right by K steps
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], K=3 -> Output:[5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], K=2 -> Output:[3,99,1,-100];

// Brute force
// function rotateArray(nums, k){
//     let size = nums.length;

//     if(size > k){
//         k = k%size;
//     }

//     const rotated = nums.splice(size - k, size);
//     nums.unshift(...rotated);

//     return nums;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7]));
// Time complexity - O(n)


// Optimised Approach
function rotateArrayOptimised(nums, k){
    let size = nums.length;

    if(size > k){
        k = k%size;
    }

    reverse(nums, 0, nums.length - 1); // O(n)
    reverse(nums, 0, k - 1); // O(k)
    reverse(nums, k, nums.length - 1); // O(n-k)

    return nums;
}

function reverse(nums, left, right){
    while(left < right){
        const temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}
console.log(rotateArrayOptimised([1,2,3,4,5,6,7], 3));