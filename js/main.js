// 'use strict'
let money;

let income = 'freelance';

let deposit = confirm('Есть ли у вас депозит в банке?');

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую.', 'хлеб, такси');
console.log(addExpenses.length);

let mission = 90000000;


console.log(addExpenses.toLowerCase());

console.log(addExpenses.split(', '));

let expenses1, expenses2;

// let expenses1 = prompt('Введите обязательную статью расходов?', 'хлеб');
// let amount1 = +prompt('Во сколько это обойдется?', '10000');

// let expenses2 = prompt('Введите обязательную статью расходов?', 'такси');
// let amount2 = +prompt('Во сколько это обойдется?', '10000');

let start = function() {
  
  do {
    money = prompt('Ваш месячный доход?');
  } while (isNaN(parseFloat(money)));

 }
 

start();

let sumCheck = function() {
  let sumValue;
  do {
    sumValue = prompt('Во сколько это обойдется?');
  } while (isNaN(parseFloat(sumValue)));
  
  return sumValue
}

let getExpensesMonth = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i===0) {
      expenses1 = prompt('Введите обязательную статью расходов?', 'хлеб');
    } else if (i===1) {
      expenses2 = prompt('Введите обязательную статью расходов?', 'такси');
    }

    sum += +sumCheck();

  }

  console.log(sum);
  return sum;
}


let expensesMonth = getExpensesMonth();
console.log('Расходы за месяц: ', expensesMonth);

let accumulatedMonth = getAccumulatedMonth();
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ', budgetDay);

let period = Math.ceil(getTargetMonth());
if (period > 0){
  console.log('Цель будет достигнута за: ' + period + ' месяцев.');
} else {
  console.log('Цель не будет достигнута');
}

// if (budgetDay > 1200) {
//   console.log('У вас высокий уровень дохода');
// } else if (budgetDay <= 1200 || budgetDay >= 600) {
//   console.log('У вас средний уровень дохода');
// } else if (budgetDay < 600 || budgetDay >= 0) {
//   console.log('К сожалению у вас уровень дохода ниже среднего');
// } else {
//   console.log('Что то пошло не так');
// }

function getAccumulatedMonth() {
  let result = money - expensesMonth
  return result;
}

function getTargetMonth() {
  return mission / accumulatedMonth;
}

function showTypeOf(data) {
  console.log(typeof data);
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

// getStatusIncome();