'use strict';

/**
 * Возводит число x в степень n.
 *
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени.
 * @returns {number} Результат возведения в степень.
 */
export function pow(x, n) {
    return Math.pow(x, n);
}

/**
 * Вычисляет сумму чисел от 1 до n.
 *
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
export const sumTo = new Function('n', `
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
`);

/**
 * Проверяет, является ли год високосным.
 *
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
export function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа.
 *
 * @param {number} n - Число для вычисления факториала.
 * @returns {bigint} Факториал числа в формате BigInt.
 */
export function factorial(n) {
    if (n < 0) return 0n;
    if (n === 0 || n === 1) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Вычисляет n-е число Фибоначчи.
 *
 * @param {number} n - Порядковый номер числа Фибоначчи.
 * @returns {bigint} n-е число Фибоначчи в формате BigInt.
 */
export function fib(n) {
    if (n < 0) return 0n;
    if (n === 0) return 0n;
    if (n === 1) return 1n;

    let prev = 0n;
    let curr = 1n;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}

/**
 * Создаёт функцию сравнения с заданным значением x.
 *
 * @param {number} x - Базовое значение для сравнения.
 * @returns {Function} Функция, принимающая y и возвращающая true, false или null.
 */
export function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Вычисляет сумму всех переданных аргументов.
 *
 * @param {...number} args - Числа для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
export function sum(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * Добавляет к объекту символьное свойство blackSpot.
 *
 * @param {Object} obj - Целевой объект.
 * @returns {Object} Тот же объект с добавленным символьным свойством.
 */
export function addBlackSpot(obj) {
    obj[Symbol.for('blackSpot')] = true;
    return obj;
}