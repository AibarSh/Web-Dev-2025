#EXCEPTIONS

a = '1'
b = '0'
c = '@'
d = '2'
try:
    print (int(a) / int(b), '\n')
except ZeroDivisionError as e:
    print ("Division by zero")

try:
    print ( int(d) / int(c), '\n') 
except ValueError as a:
    print ("ValueError: ", a)

print('-'*50)
#IF ELSE

n = int(input("Enter a number: "))
if n % 2 == 0:
    if n in range(2, 6):
        print("Not Weird")
    elif n in range(6, 21):
        print("Weird")
    elif n > 20:
        print("Not Weird")
else:
    print("Weird")

print('-'*50)
#Function

def leap_year(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True 
    else:
        return False
    
year = int(input("Enter a year: "))
print(leap_year(year))

print('-'*50)
#List Comprehensions

x = int(input())
y = int(input())
z = int(input())
n = int(input())

print([[i, j, k] for i in range(x+1) for j in range(y+1) for k in range(z+1) if (i+j+k) != n])

print('-'*50)
#CAPITALIZE

def capitalize(string):
    for i in string.split():
        string = string.replace (i, i.capitalize())
    return string

string = int(input("Enter a string: "))
print(capitalize(string))

print('-'*50)
#Nested Lists

student = []
for i in range(int(input())):
    name = input()
    score = float(input())
    student.append([name, score])

second_lowest = sorted(set([score for name, score in student]))[1]
print('\n'.join(sorted([name for name, score in student if score == second_lowest])))

print('-'*50)
#Minion Game

s = input().strip() 

vowels = 'AEIOU'
score = 0
for i in range(len(s)):
    if s[i] in vowels:
        score += (len(s) - i)
    else:
        score -= (len(s) - i)
if score > 0:
    print(score)


print('-'*50)
#NO IDEA

n, m = input().split()
arr = input().split()
A = set(input().split())
B = set(input().split())
print(sum([(i in A) - (i in B) for i in arr]))


print('-'*50)
#HELLO KBTU

print("Hello, KBTU!")