# 1)
# ****
# ****
# ****
# ****

# for i in range(1, 5):
#     for j in range(1,5):
#         print("*", end=" ")
#     print()        



# * * * *
# *     *
# *     *
# * * * *

# rows = 4
# cols = 5

# for i in range(1, rows + 1):
#     for j in range(1, cols + 1):
#         if i == 1 or i == rows or j == 1 or j == cols:
#             print("* ", end="")
#         else:
#             print("  ", end="")
#     print()


# * 
# * * 
# * * * 
# * * * * 

# rows = 4

# for i in range(1, rows + 1):
#     for j in range(1, i + 1):
#         print("* ", end="")
#     print()


# * * * * *
# * * * *
# * * * 
# * *
# *

# rows= 5

# for i in range(1,rows+1):
#     for j in range(rows+1,i,-1):
#         print("* ",end="")
#     print()
    
    
#         * 
#       * * 
#     * * * 
#   * * * * 

rows= 5

for i in range(1,rows+1):
    for j in range(rows+1,i,-1):
        print("  ",end="")
    for k in range(1,i):
        print("* ",end="")
    print()