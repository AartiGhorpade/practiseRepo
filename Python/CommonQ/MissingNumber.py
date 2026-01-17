# def findMissingNumber(nums):
#         n = len(nums)
#         expectedSum = n * (n+1) // 2
#         actualSum = sum(nums)
#         return expectedSum - actualSum


def missingNumber( nums):
       n = len(nums)
       expectedSum = n*(n+1)//2
       actualSum=0
       for i in range(n):
           actualSum += nums[i]
           
      
       return expectedSum-actualSum

print(missingNumber([3,0,1]))