'use strict';

import { fib } from './lab2.js';

/**
 * Возвращает дробную часть числа.
 *
 * @param {number} num - Число.
 * @returns {number} Дробная часть числа.
 */
export function getDecimal(num) {
    let result = num - Math.floor(num);
    return parseFloat(result.toFixed(10));
}

/**
 * Нормализует ссылку, приводя её к https://.
 *
 * @param {string} url - Адрес сайта.
 * @returns {string} Нормализованный адрес.
 */
export function normalizeUrl(url) {
    if (url.startsWith('https://')) {
        return url;
    } else if (url.startsWith('http://')) {
        return url.replace('http://', 'https://');
    } else {
        return 'https://' + url;
}
}

/**
 * Проверяет строку на наличие спама.
 *
 * @param {string} str - Текст для проверки.
 * @returns {boolean} true, если найден спам, иначе false.
 */
export function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Обрезает строку до заданной длины.
 *
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимальная длина строки.
 * @returns {string} Обрезанная строка.
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    
    return str;
}

/**
 * Делает первую букву строки заглавной.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} Строка с заглавной первой буквой.
 */
function ucFirst(str) {
    if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

/**
 * Преобразует строку из kebab-case в camelCase.
 *
 * @param {string} str - Исходная строка.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : ucFirst(word))
        .join('');
}

/**
 * Возвращает массив первых n чисел Фибоначчи.
 *
 * @param {number} n - Количество чисел.
 * @returns {bigint[]} Массив чисел Фибоначчи.
 */
export function fibs(n) {
    let resultArr = [];
    for (let i = 0; i < n; i++) {
        resultArr.push(fib(i));
    }
    
    return resultArr;
}

/**
 * Возвращает массив, отсортированный по убыванию.
 *
 * @param {array[]} arr - Исходный массив.
 * @returns {array[]} Новый массив, отсортированный по убыванию.
 */
export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * Удаляет повторяющиеся элементы массива.
 *
 * @param {Array} arr - Исходный массив.
 * @returns {Array} Массив без повторов.
 */
export function unique(arr) {
    return Array.from(new Set(arr));
}

if (typeof window !== 'undefined') {
window.getDecimal = getDecimal;
window.normalizeUrl = normalizeUrl;
window.checkSpam = checkSpam;
window.truncate = truncate;
window.camelize = camelize;
window.fibs = fibs;
window.arrReverseSorted = arrReverseSorted;
window.unique = unique;
}