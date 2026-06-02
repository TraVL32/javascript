'use strict';

/**
 * Возводит число в степень.
 *
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени.
 * @returns {number} Результат возведения в степень.
 */
function pow(x, n) {
    return x ** n; 
}

/**
 * Вычисляет сумму чисел от 1 до n.
 *
 * @param {number} n - Верхняя граница суммы.
 * @returns {number} Сумма чисел от 1 до n.
 */
const sumTo = new Function('n', 'return (n * (n + 1)) / 2;');

/**
 * Проверяет, является ли год високосным.
 *
 * @param {number} year - Год для проверки.
 * @returns {boolean} true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/**
 * Вычисляет факториал числа.
 *
 * @param {number|bigint} n - Число, для которого вычисляется факториал.
 * @returns {bigint} Факториал числа.
 */
function factorial(n) {
    let bn = BigInt(n);

    if (bn === 0n || bn === 1n) {
    return 1n;
    }

    return bn * factorial(bn - 1n);
}

/**
 * Вычисляет число Фибоначчи по его номеру.
 *
 * @param {number|bigint} n - Номер числа Фибоначчи.
 * @returns {bigint} Число Фибоначчи.
 */
function fib(n) {
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

/**
 * Создает функцию для сравнения числа x с числом y.
 *
 * @param {number} x - Число, с которым выполняется сравнение.
 * @returns {function(number): (boolean|null)} Функция сравнения.
 */
function compare(x) {
    return function(y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
    };
}

/**
 * Вычисляет сумму всех переданных аргументов.
 *
 * @param {...number} args - Набор чисел для суммирования.
 * @returns {number} Сумма аргументов.
 */
function sum(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

/**
 * Добавляет объекту специальное свойство blackSpot через Symbol.
 *
 * @param {Object} obj - Объект, в который добавляется свойство.
 * @returns {Object} Измененный объект.
 */
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}