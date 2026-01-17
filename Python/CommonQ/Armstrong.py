def checkArmstrong(num):
    digits = len(str(num))
    singleNo = 0
    cube = 0
    while(num > 0):
        singleNo = singleNo *10 +(num%10)
        print(singleNo)

checkArmstrong(153)
    
    