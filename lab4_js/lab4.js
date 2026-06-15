'use strict';

export class Book {
    /** @type {string} название книги */
    _title;

    /** @type {number} год издания (защищённое поле) */
    _pubYear;

    /** @type {number} цена книги (приватное поле) */
    #price;

    /**
     * @param {string} title - название книги
     * @param {number} pubYear - год издания
     * @param {number} price - цена книги
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * возвращает название книги
     * @returns {string} название книги
     */
    get title() {
        return this._title;
    }

    /**
     * устанавливает название книги
     *
     * @param {string} value - новое название книги
     * @throws {Error} если название пустая строка
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('название книги не должно быть пустой строкой');
        }
        this._title = value;
    }

    /**
     * возвращает год издания книги
     *
     * @returns {number} год издания
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * устанавливает год издания книги
     *
     * @param {number} value - год издания
     * @throws {Error} если значение не является положительным числом
     */
    set pubYear(value) {
        if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
            throw new Error('pubYear должен быть положительным числом');
        }
        this._pubYear = value;
    }

    /**
     * возвращает цену книги
     *
     * @returns {number} цена книги
     */
    get price() {
        return this.#price;
    }

    /**
     * устанавливает цену книги
     *
     * @param {number} value - цена книги
     * @throws {Error} если значение не является положительным числом
     */
    set price(value) {
        if (typeof value !== 'number' || Number.isNaN(value) || value <= 0) {
            throw new Error('price должен быть положительным числом');
        }
        this.#price = value;
    }

    /**
     * выводит в консоль название и цену книги
     */
    show() {
        console.log(`Книга: "${this.title}", Цена: ${this.price}`);
    }

    /**
     * сравнивает книги по году издания
     *
     * @param {Book} a - первая книга
     * @param {Book} b - вторая книга
     * @returns {number} результат сравнения
     */
    static compare(a, b) {
        return a.pubYear - b.pubYear;
    }
}

/**
 * проверяет, пустой ли объект
 *
 * @param {*} obj - проверяемое значение
 * @returns {boolean|undefined} true, false или undefined для примитивов
 */
export function isEmpty(obj) {
    if (obj === null || typeof obj !== 'object') {
        return undefined;
    }

    return Reflect.ownKeys(obj).length === 0;
}

/**
 * добавляет в объект методы addClass и removeClass
 *
 * @param {Object} obj - объект со свойством className
 * @returns {Object} тот же объект
 */
export function addClassMethods(obj) {
    obj.addClass = function(cls) {
        let classes = this.className ? this.className.split(' ') : [];
        if (!classes.includes(cls)) {
            classes.push(cls);
            this.className = classes.join(' ').trim();
        }
        return this;
    };

    obj.removeClass = function(cls) {
        let classes = this.className ? this.className.split(' ') : [];
        classes = classes.filter(function(item) {
            return item !== cls;
        });
        this.className = classes.join(' ').trim();
        return this;
    };

    return obj;
}

/**
 * возвращает количество секунд с начала текущего дня
 *
 * @returns {number} количество секунд
 */
export function getSecondsToday() {
    let now = new Date();
    let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}

/**
 * форматирует дату в строку вида "дд.мм.гг"
 *
 * @param {Date} date - дата
 * @returns {string} строка формата "дд.мм.гг"
 */
export function formatDate(date) {
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yy = String(date.getFullYear()).slice(-2);
    return dd + '.' + mm + '.' + yy;
}

/**
 * преобразует объект в JSON и обратно
 *
 * @param {Object} obj - объект для проверки
 * @returns {boolean} true, если JSON-копия совпадает по содержимому
 */
export function deepEqualJSON(obj) {
    let json = JSON.stringify(obj, null, 2);
    let obj2 = JSON.parse(json);
    return JSON.stringify(obj) === JSON.stringify(obj2);
}

let book1 = new Book('Мастер и Маргарита', 1967, 500);
book1.show();

book1.title = 'Собачье сердце';
book1.pubYear = 1925;
book1.price = 600;

console.log(book1);

let books = [
    new Book('Книга 1', 2005, 300),
    new Book('Книга 2', 1990, 450),
    new Book('Книга 3', 2010, 250)
];

books.sort(Book.compare);
console.log(books);

console.log(isEmpty({}));
console.log(isEmpty({ [Symbol()]: true }));
console.log(isEmpty(Object.defineProperty({}, 'name', { value: 'John' })));

let obj = {
    className: 'open menu'
};

addClassMethods(obj);
console.log(obj.addClass('new').removeClass('open'));

let data = {
    name: 'Roman',
    skills: ['video', 'editing'],
    info: {
        city: 'Orel'
    }
};

let json = JSON.stringify(data, null, 2);
console.log(json);

let obj2 = JSON.parse(json);
console.log(JSON.stringify(data) === JSON.stringify(obj2));

console.log(getSecondsToday());
console.log(formatDate(new Date()));