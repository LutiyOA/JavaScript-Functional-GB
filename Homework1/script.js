// JavaScript про ECMAScript (семинары)
// Урок 1. Функциональный Javascript
// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
// найти минимальное число в массиве, решение задание должно состоять из одной строки

// 2) Напишите функцию createCounter, которая создает счетчик и 
// возвращает объект с двумя методами: increment и decrement. 
// Метод increment должен увеличивать значение счетчика на 1, 
// а метод decrement должен уменьшать значение счетчика на 1. 
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой 
// элемент дерева DOM и название класса в качестве аргументов и возвращает 
// первый найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// Задание 1
const array = [1, 5, 7, 9];

const minValue = Math.min(...array);
console.log(minValue);

// Задание 2
function createCounter(num) {
    let value = num;

    return {
        getValue: function () { return value; },
        increment: function () { ++value; },
        decrement: function () { --value; }
    }
}

const counter1 = createCounter(5);
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();
console.log(counter1.getValue());

// Задание 3
function findElementByClass(rootEl, className) {

    // console.log(`Root= `);
    // console.log(rootEl);
    if (rootEl.matches('.' + className)) {
        // console.log('НАШЛИ!!!!!!!!!!!!!!!!!!!!!!');
        // console.log(rootEl);

        return [rootEl];
    }
    const tempEl = rootEl.querySelectorAll("*");
    if (tempEl === null)
        return [];

    // console.log(`  В этом root нашли: `);
    // console.log(tempEl);
    const acccumulator = [];

    tempEl.forEach(element => {

        let l = null;
        l = findElementByClass(element, className);

        if (l.length != 0) {

            for (let i = 0; i < l.length; i++)
                acccumulator.push(l[i]);

            // console.log("Изменили аккумулятор:");
            // console.log(acccumulator);
        }
        // console.log(`Для ${element} нашли ${l}`);

    });
    // console.log("Акккумулятор:");
    // console.log(acccumulator);
    return acccumulator;
}

const rootElement = document.getElementById('root');

const targetElement = findElementByClass(rootElement, 'my-class');

console.log('В итоге нашли: ');
console.log(targetElement[0]);

