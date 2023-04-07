# Define conversion functions for each type of unit
def convert_distance(value, unit_from, unit_to):
    if unit_from == "miles" and unit_to == "kilometers":
        return value * 1.60934
    elif unit_from == "kilometers" and unit_to == "miles":
        return value / 1.60934
    else:
        raise ValueError("Invalid units for distance conversion")

def convert_weight(value, unit_from, unit_to):
    if unit_from == "pounds" and unit_to == "kilograms":
        return value * 0.453592
    elif unit_from == "kilograms" and unit_to == "pounds":
        return value / 0.453592
    else:
        raise ValueError("Invalid units for weight conversion")

def convert_temperature(value, unit_from, unit_to):
    if unit_from == "celsius" and unit_to == "fahrenheit":
        return (value * 9/5) + 32
    elif unit_from == "fahrenheit" and unit_to == "celsius":
        return (value - 32) * 5/9
    else:
        raise ValueError("Invalid units for temperature conversion")

# Main program
print("Welcome to the unit converter made by shivam kadam!")

# Loop until the user enters "q" to quit
while True:
    print("Which type of unit do you want to convert?")
    print("1. Distance")
    print("2. Weight")
    print("3. Temperature")
    print("Enter 'q' to quit")

    choice = input("Enter your choice: ")

    if choice == "q":
        break

    if choice == "1":
        value = float(input("Enter the distance value: "))
        unit_from = input("Enter the current unit (miles or kilometers): ")
        unit_to = input("Enter the target unit (miles or kilometers): ")
        converted_value = convert_distance(value, unit_from, unit_to)
        print(f"{value} {unit_from} is equal to {converted_value:.2f} {unit_to}")

    elif choice == "2":
        value = float(input("Enter the weight value: "))
        unit_from = input("Enter the current unit (pounds or kilograms): ")
        unit_to = input("Enter the target unit (pounds or kilograms): ")
        converted_value = convert_weight(value, unit_from, unit_to)
        print(f"{value} {unit_from} is equal to {converted_value:.2f} {unit_to}")

    elif choice == "3":
        value = float(input("Enter the temperature value: "))
        unit_from = input("Enter the current unit (celsius or fahrenheit): ")
        unit_to = input("Enter the target unit (celsius or fahrenheit): ")
        converted_value = convert_temperature(value, unit_from, unit_to)
        print(f"{value} {unit_from} is equal to {converted_value:.2f} {unit_to}")

    else:
        print("Invalid choice. Please try again.")
