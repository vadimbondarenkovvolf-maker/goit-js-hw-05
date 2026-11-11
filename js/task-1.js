/*
задачa 1: імена користувачів
У task-1.js оголоси стрілочну функцію getUserNames(users). Вона має повернути новий масив зі значеннями властивості name всіх користувачів.
Виклич метод map() на масиві users.
У колбеці отримай властивість name кожного користувача.
Поверни масив, створений методом map().
Додай перевірочний виклик з ТЗ і залиш його для ментора.
*/
'use strict';

const getUserNames = users => users.map(user => user.name);

console.log(
  getUserNames([
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      balance: 3793
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      balance: 2278
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      balance: 2764
    }
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]