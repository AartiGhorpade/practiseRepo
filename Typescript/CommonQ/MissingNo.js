function findMissingNumber(nums) {
    var n = nums.length;
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = nums.reduce(function (result, i) { return result + i; }, 0);
    return expectedSum - actualSum;
}
console.log(findMissingNumber([3, 0, 1]));
