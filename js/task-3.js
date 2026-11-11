/*
Задача 3. профіль гравця
У task-3.js доповни об’єкт profile методами changeUsername(newName),updatePlayTime(hours) і getInfo(). Всередині методів звертайся до властивостей через this.
Додай метод changeUsername(newName), який змінює this.username на newName.
Додай метод updatePlayTime(hours), який збільшує this.playTime на hours.
Додай метод getInfo(), який повертає рядок із поточними значеннями this.username і this.playTime.
Виклич getInfo() до змін, потім зміни ім’я та збільш ігровий час.
Додай перевірочний код з ТЗ і залиш його для ментора.
*/
'use strict';

const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours){
    this.playTime += hours;
  },
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
},
};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

