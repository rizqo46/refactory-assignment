def reversewords(inp):
    s = inp
    s = s.split(' ')
    n = len(s)
    for i in range(n):
        s[i] = s[i][::-1]
    r = list(" ".join(s))
    m = len(r)
    for i in range(m):
        if inp[i].islower():
            r[i]=r[i].lower()
        elif inp[i].isupper():
            r[i]=r[i].upper()
    return ''.join(r)

if __name__ == "__main__":
    s = 'Ibu Ratna antar ubi'
    print(reversewords(s))