# 1) wa function to find greatest of three numbers

# def findNums(a,b,c):
#     if(a>b and a>c):
#         print(f'{a} is greater')
#     elif(b>c and b>a):
#         print(f'{b} is greater')
#     elif(c>a and c>b):
#         print(f'{c} is greater')
#     else:
#         print('all numbers are same')

# findNums(5,60,9)
        
        
# 2) wa recursive function to calculate first n natural numbers

# sum = 0
# def findSum(n):
#     if(n==0):
#         return 0
        
#     return findSum(n - 1) + n

# print(findSum(5))

# 3) pattern

# * * *
# * * 
# *


# def pattern(n):
#     for i in range(n, 0, -1):
#         for j in range(i):
#             print("*", end=" ")
#         print()

# pattern(3)


# 4) pattern
# 1
# 1 2
# 1 2 3
# 1 2 3 4

# def pattern(n):
#     for i in range(1 , n+1):
#         for j in range(1,i+1):
#             print(j, end=" ")
            
#         print()
        
        
# pattern(4)


# 5) pattern

# 1 2 3 4
# 1 2 3
# 1 2
# 1

    
# def pattern(n):
#     for i in range(n,0,-1):
#         for j in range(1,i+1):
#              print(j, end=" ")
            
#         print()
        
# pattern(4)



# 6) multiplication table


def multi(userInput):
    for i in range(1,11):
        print(f"{i} * {userInput}", i*userInput)
        
multi(int(input("enter the number: ")))
