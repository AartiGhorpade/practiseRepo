  function findMissingNumber(nums: number[]): number {
     let n:number = nums.length;

      let expectedSum = (n*(n+1))/2;
      let actualSum = nums.reduce((result,i)=>result + i ,0);
      return expectedSum - actualSum;
  }

console.log(findMissingNumber([3,0,1]));
