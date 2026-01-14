class ReverseNumber:
    def reverseNumber(self, n):
        revNo = 0
        while n > 0:
            revNo = revNo * 10 + (n % 10)
            n = n // 10              
        return revNo

s = ReverseNumber()
print(s.reverseNumber(123))
