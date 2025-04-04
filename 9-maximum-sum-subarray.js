// Given an integer array nums, find the subarray with the largest sum and return its sum.

// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4] -->> output: 6
// Input: [5, 4, -1, 7, 8] -->> output: 23

function maxSubArray(nums){
    let maxsum = nums[0];
    let startIdx = 0;
    let endIdx = 0;
     for(let i=0; i<nums.length; i++){
        let currentSum = 0;
        for(let j =i; j<nums.length; j++){
            currentSum = currentSum + nums[j];
            if(currentSum > maxsum){
                maxsum = currentSum;
                startIdx = i;
                endIdx = j;
            }
        }
     }

     return {
        sum: maxsum,
        subArray: nums.slice(startIdx, endIdx + 1),
     };
}

console.log(maxSubArray([5, 4, -1, 7, 8]));
// Time complexity - o(n^2)
// space complexity - o(1)

