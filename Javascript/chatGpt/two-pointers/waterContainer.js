function watercontainer(nums) {
  let left = 0;
  let right = nums.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let findMaxWater = Math.min(nums[left], nums[right]) * width;
    if (maxWater < findMaxWater) {
      maxWater = findMaxWater;
    }
    left++;
    right--;
  }

  return maxWater;
}

console.log(watercontainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
