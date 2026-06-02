'use strict';

import { fib } from './lab2.js';
// комментарии jsdoc
export function getDecimal(num) {
    let result = num - Math.floor(num);
    return parseFloat(result.toFixed(10));
}

export function normalizeUrl(url) {
    if (url.startsWith('https://')) {
        return url;
    } else if (url.startsWith('http://')) {
        return url.replace('http://', 'https://');
    } else {
        return 'https://' + url;
    }
}

export function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

export function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + '…';
    }
    return str;
}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

export function camelize(str) {
    return str
        .split('-')
        .map((word, index) => index === 0 ? word : ucFirst(word))
        .join('');
}

export function fibs(n) {
    let resultArr = [];
    for (let i = 0; i < n; i++) {
        resultArr.push(fib(i));
    }
    return resultArr;
}

export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

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