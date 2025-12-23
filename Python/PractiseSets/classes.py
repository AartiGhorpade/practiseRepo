# class Student:
    
#     def __init__(self,name,marks):
#       self.name = name
#       self.marks = marks
      
#     def average(self):
#         sum = 0
#         for val in self.marks:
#             sum = sum+val
#         return sum/3
                    
# s1 = Student('arti',[98,85,78])
# print(s1.average())


# 2)static method

class Student:
    @staticmethod
    def welcome():
        print('welcome jk')
        
s = Student()
s.welcome()