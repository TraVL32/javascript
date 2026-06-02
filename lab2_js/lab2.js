'use strict';

function pow(x, n) {
    return x ** n; 
}
// комментарии jsdoc
const sumTo = new Function('n', 'return (n * (n + 1)) / 2;');

function isLeapYear(year) {
    return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

function factorial(n) {
    let bn = BigInt(n);
    
    if (bn === 0n || bn === 1n) {
        return 1n;
    }
    
    return bn * factorial(bn - 1n);
}

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


function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

function sum(...args) {
    return args.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}