function removeDup(nums) {
  let start = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[start] != nums[i]) {
      start++;
      nums[start] = nums[i];
    }
  }

  return nums.slice(0, start + 1);
}

console.log(removeDup([1, 1, 2, 2, 3, 4, 4]));
