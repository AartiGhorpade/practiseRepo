def countOcc(str):
    counts={}
    
    for char in str:
        if char in counts:
            counts[char]+=1
        else:
            counts[char] = 1
    return counts

print(countOcc("hellodear"))