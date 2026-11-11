/*
задачa 1: пакування товарів
У task-1.js оголоси функцію isEnoughCapacity(products, containerSize).
Вона має підсумувати кількість усіх товарів і перевірити, чи вони вмістяться в контейнер.
Отримай масив значень об’єкта products за допомогою Object.values().
Створи змінну для загальної кількості товарів і задай їй початкове значення 0.
Перебери масив значень циклом і додай кожне число до загальної кількості.
Порівняй суму з containerSize і поверни результат цього порівняння.
Додай чотири виклики console.log з ТЗ і залиш їх для ментора.
*/
'use strict';
function  isEnoughCapacity(products, containerSize) {
    const values = Object.values(products);
    let total = 0;
    for(const value of values){
        total += value;
    }
    return total <= containerSize;
}


console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false

console.log(isEnoughCapacity({ a: 5 }, 10)); // true
console.log(isEnoughCapacity({ a: 10 }, 10)); // true
console.log(isEnoughCapacity({ a: 12 }, 10)); // false