function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum == target) {
      return [start, end];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }
}

console.log(twoSum([2, 3, 4, 7, 11, 15], 9));
