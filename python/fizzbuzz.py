def do_the_fizz_buzz(n):

    if n % 3 == 0 and n % 5 == 0:
        return 'FizzBuzz'
    if n % 3 == 0:
        return 'Fizz'
    if n % 5 == 0:
        return 'Buzz'

    return i

for i in range(1, 101):
    print(do_the_fizz_buzz(i))
