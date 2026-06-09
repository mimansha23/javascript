# Program to check if a number is Even or Odd

def check_even_odd(num):
    """Return 'Even' if num is even, otherwise 'Odd'."""
    return "Even" if num % 2 == 0 else "Odd"

def main():
    try:
        # Take input from user
        user_input = input("Enter an integer: ").strip()

        # Validate integer input
        num = int(user_input)

        # Check and display result
        result = check_even_odd(num)
        print(f"The number {num} is {result}.")

    except ValueError:
        print("Invalid input! Please enter a valid integer.")

if __name__ == "__main__":
    main()

