'use strict'
let money = 300000;
console.log(typeof money);

let income = 'freelance';
console.log(typeof income);

let deposit = false;
console.log(typeof deposit);

let addExpenses = 'Internet, Taxi, Phone';
console.log(addExpenses.length);

let mission = 90000000;
let period = 1;

console.log('Период равен ' + period + ' месяцев. ');
console.log('Цель заработать ' + mission +' долларов.');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = money/30;
console.log(budgetDay);

money = +prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.');
console.log(addExpenses.split(', ')console.logposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - amount1 - amount2;
console.log('Бюджет на месяц: ', budgetMonth);

budgetDay = Math.floor(budgetMonth / 30);
console.log('Бюджет на день: ', budgetDay);

period = Math.ceil(mission / budgetDay);
console.log('Цель будет достигнута за: ' + period + ' месяцев.');

if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay <= 1200 || budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 || budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}