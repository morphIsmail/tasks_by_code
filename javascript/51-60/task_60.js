/*
Задача 60: Даны два целых числа A и B (A < B). Найти сумму квадратов всех целых чисел от A до B включительно

Категория: Цикл с параметром

#category_for
*/
let A = 3
let B = 4
let count = 0

for (let i = A; i <= B; i++) {
  console.log(i)
  count += Math.pow(i, 2)
}

console.log(count)