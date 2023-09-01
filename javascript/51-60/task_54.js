/*
Задача 54: Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно

Категория: Цикл с параметром

#category_for
*/
let A = 1
let B = 3
let count = 0

for (let i = A; i <= B; i++) {
  count += i
}

console.log(count)