# In the Gregorian calendar, three conditions are used to identify leap years:
# - The year can be evenly divided by 4, is a leap year, unless:
# - * The year can be evenly divided by 100, it is NOT a leap year, unless:
# - - # The year is also evenly divisible by 400. Then it is a leap year.

def leapyear(a, b):
    if a > b:
        a, b = b, a
    arr = []
    for i in range(a, b + 1):
        div4 = (i%4 == 0)
        div100 = (i%100 == 0)
        div400 = (i%400 == 0)
        if div4 and div100 and div400:
            arr.append(i)
        elif div4 and not div100:
            arr.append(i)
    return arr

if __name__ == "__main__":
    a, b = 2000, 1900
    print(leapyear(a, b))

