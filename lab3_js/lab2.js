'use strict';

/**
 * Вычисляет n-е число Фибоначчи.
 *
 * @param {number|bigint} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи.
 */
export function fib(n) {
    let bn = BigInt(n);

    if (bn === 0n) return 0n;
    if (bn === 1n) return 1n;

    let a = 0n;
    let b = 1n;

    for (let i = 2n; i <= bn; i++) {
        let c = a + b;
        a = b;
        b = c;
        }

    return b;
}