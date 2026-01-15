def findMissingNumber(nums):
        n = len(nums)
        expectedSum = n * (n+1) // 2
        actualSum = sum(nums)
        return expectedSum - actualSum

print(findMissingNumber([3,0,1]))