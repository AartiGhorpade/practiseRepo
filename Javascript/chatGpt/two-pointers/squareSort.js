// function squareSort(nums) {
//   let left = 0;
//   for (let i = 0; i < nums.length; i++) {
//     nums[i] = nums[i] * nums[i];
//   }

//   return nums.sort();
// }

// console.log(squareSort([-4, -1, 0, 3, 10]));

function squareSort(nums) {
  let left = 0;
  let right = nums.length - 1;
  let position = nums.length - 1;
  let newArr = [];
  while (left <= right) {
    let leftSqr = nums[left] * nums[left];
    let rightSqr = nums[right] * nums[right];

    if (leftSqr < rightSqr) {
      newArr[position] = rightSqr;
      right--;
    } else {
      newArr[position] = leftSqr;
      left++;
    }
    position--;
  }

  return newArr;
}

console.log(squareSort([-4, -1, 0, 3, 10]));
