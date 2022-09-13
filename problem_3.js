/**
 * Problem : The prime factors of 13195 are 5, 7, 13 and 29.
 *           What is the largest prime factor of the number 600851475143 ?
 * 
 * Solution : This solution uses a naive implementation of the prime algorithm. This could be improved by using the Sieve of Atkin to find all the primes numbers between 1 and n / 2.
 * 
 * Complexity : O(n^2)
 */

import { prime_numbers } from './lib.js';

const get_prime_factors = (n) => {
    const prime_factors = [];
    const primes = prime_numbers();
    let current_prime = 2;
    let remaining = n;

    while (current_prime <= Math.sqrt(remaining)) {
        if (remaining % current_prime === 0) {
            remaining = remaining / current_prime;
            prime_factors.push(current_prime);
        } else {
            current_prime = primes.next().value;
        }
    }

    return [...prime_factors, remaining];
};

const problem_3 = (n) => {
    const prime_factors = get_prime_factors(n);

    return prime_factors[prime_factors.length - 1];
};

console.log(problem_3(600851475143)); // 6857