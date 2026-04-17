function threeSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = [];

  for (let i = 1; i < nums.length; i++) {
    let sum = nums[i] + nums[left] + nums[right];
    console.log(sum);

    if (sum == target) {
      ans.push(nums[i], nums[left], nums[right]);
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return ans;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4], 0));
