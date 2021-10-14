def fizzbuzz(n):
    arr = []
    for i in range(1, n + 1):
        div3 = (i%3 == 0)
        div5 = (i%5 == 0)
        if div3 and div5:
            arr.append('FizzBuzz')
        elif div3:
            arr.append('Fizz')
        elif div5:
            arr.append('Buzz')
        else:
            arr.append(str(i))
    return arr

if __name__ == "__main__":
    n = 15
    print(fizzbuzz(n) == ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"])