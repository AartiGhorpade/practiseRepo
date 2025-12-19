name = input()

# 1) python program to display user entered name followed by good afternoon
# import datetime

# print(f"good afternoon {name}")

letter = '''Dear <|name|>,
You are selected!
<|Date|> '''
print(letter.replace("<|name|>",name).replace("<|Date|>","21"))