function removeDup(nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      left++;
      nums[left] = nums[right];
    }
  }

  return nums.slice(0, left + 1);
}

console.log(removeDup([1, 1, 2, 2, 3, 4, 4]));
