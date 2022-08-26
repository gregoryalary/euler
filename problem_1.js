/**
 * Problem : If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *           Find the sum of all the multiples of 3 or 5 below 1000.
 * 
 * Solution : This solution favors factorisation and readabilty over performance.
 *            The rest parameters create an unnecessary array, that could be avoided by implementing a less reusable method "is_multiple_of_3_or_5".
 *            This would also avoid an unnecessary spreading each time the function is_multiple_of is called.
 * 
 * Complexity : O(n) - n being the upper bound of the range (1000 here)
 */

const is_multiple_of = (n, ...multiples) => multiples.some(multiple => n % multiple === 0);

const problem_1 = (from, to, ...multiples) => {
    let sum = 0;

    for (let n = from; n < to; n = n + 1) {
        if (is_multiple_of(n, ...multiples)) {
            sum = sum + n;
        }
    } 

    return sum;
}

console.log(problem_1(1, 1000, 3, 5)); // -> 233168