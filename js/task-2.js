/*
задачa 2: розрахунок калорій
У task-2.js оголоси функцію calcAverageCalories(days). Вона має повернути середнє значення властивостей calories з усіх об’єктів масиву.
Якщо days — порожній масив, одразу поверни 0.
Створи змінну для загальної кількості калорій і задай їй значення 0.
Перебери об’єкти в days і додай значення їхніх властивостей calories.
Поділи загальну кількість калорій на довжину масиву та поверни результат.
Додай три виклики console.log з ТЗ і залиш їх для ментора.
*/
'use strict';

function calcAverageCalories(days) {
    if(days.length === 0) {
        return 0;
    }
    let totalCalories = 0;
    for(const day of days){
        totalCalories += day.calories;
    }
return totalCalories / days.length;
}


console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0

console.log(calcAverageCalories([
  { calories: 2000 },
  { calories: 3000 },
])); // 2500

console.log(calcAverageCalories([])); // 0