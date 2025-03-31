// Remove Duplicates from Array
// Given an integer array numbs sorted in non-decreasing order, remove the duplicates in-place such that each unique element appers only once. Th erelative order of the elements should be kept the same. Then retun the number of unique elemnts in nums.

// Input: [1,1,2]  --->> Output: 2


function removeDuplicates(nums){
    for(let i=0; i<nums.length-1; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1, 1);
            i--;
        }
    }

    return nums.length;
}

console.log(removeDuplicates([1,1,2]));


// Without using JS method

function removeDuplicatesNew(nums){
    if(nums.length === 0 ) return 0;
    let i = 0;

    for(let j=1; j<nums.length; j++){
        if(nums[i] !== nums[j]){
            i++;
            nums[i] = nums[j];
        }
    }

    return i+1;
}

console.log(removeDuplicatesNew([0,0,1,1,1,2,2,3]));