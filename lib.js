const is_prime = (n) => {
    if (n <= 2) {
        return true;
    }

    if (n % 2 === 0) {
        return false;
    }

    for (let divider = 3; divider < (n / 2); divider = divider + 2) {
        if (n % divider === 0) {
            return false;
        }
    }

    return true;
}

export function* prime_numbers(i) {
    let current_number = 2;

    while (true) {
        if (is_prime(current_number)) {
            yield(current_number);
        }
        current_number = current_number + 1;
    }
}