def calculate_discount(price, percent):
    return price - (price * percent)  # BUG: Missing /100
