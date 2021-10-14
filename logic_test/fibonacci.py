def fibonacci(inp):
    s = sum(inp)
    a, b = 1, 1
    while b < s:
        a, b = b, a+b
    return min([abs(a-s), abs(b-s)])

if __name__ == "__main__":
    n = [15, 1, 3]
    print(fibonacci(n))