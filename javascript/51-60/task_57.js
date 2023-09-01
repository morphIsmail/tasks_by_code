/*
Задача 57: Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно

Категория: Цикл с параметром

#category_for
*/
let A = 2
let B = 4
let count = 1

for (let i = A; i <= B; i++) {
  count *= i
}

console.log(count)