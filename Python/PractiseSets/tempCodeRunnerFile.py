marks=[]

for i in range(6):
    singleStud=input(f"enter marks student {i+1}: ")
    marks.append(singleStud)
    
marks.sort()
print(marks)