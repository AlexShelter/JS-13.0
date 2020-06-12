'use strict'
let money = +prompt('Ваш месячный доход?', '50000');
showTypeOf(money);

let income = 'freelance';
showTypeOf(income);

let deposit = confirm('Есть ли у вас депозит в банке?');
showTypeOf(deposit);

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.', 'хлеб, такси');
console.log(addExpenses.length);

let mission = 90000000;


console.log(addExpenses.toLowerCase());

console.log(addExpenses.split(', '));


let expenses1 = prompt('Введите обязательную статью расходов?', 'хлеб');
let amount1 = +prompt('Во сколько это обойдется?', '10000');

let expenses2 = prompt('Введите обязательную статью расходов?', 'такси');
let amount2 = +prompt('Во сколько это обойдется?', '10000');
let ExpensesMonth = getExpensesMonth();
console.log('Расходы за месяц: ', ExpensesMonth);

let accumulatedMonth = getAccumulatedMonth();
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ', budgetDay);

let period = Math.ceil(getTargetMonth());
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

function getExpensesMonth() {
  return amount1+amount2;
}

function getAccumulatedMonth() {
  return money - amount1 - amount2;
}

function getTargetMonth() {
  return mission / accumulatedMonth;
}

function showTypeOf(data) {
  console.log(typeof data);
}

getStatusIncome();