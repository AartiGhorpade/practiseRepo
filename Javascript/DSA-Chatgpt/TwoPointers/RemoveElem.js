
function removeDup(nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return nums; // length of new array
}

console.log(removeDup([3, 2, 2, 3], 3));