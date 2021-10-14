def palindrome(s):
    s = s.lower() # lowercase the input
    n = len(s)
    mid = n // 2
    for i in range(mid):
        if s[i] != s[n-i-1]:
            return 'not palindrome'
    if i == mid-1:
        return 'palindrome'

if __name__ == "__main__":
    s = 'Ibu Ratna antar ubi'
    print(palindrome(s))