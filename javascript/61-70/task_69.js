/*
Задача 69: Даны десять вещественных чисел. Найти их среднее арифметическое

Категория: Последовательности

#category_series
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let result = 0

for (let i = 0; i < arr.length; i++) {
  result += arr[i]
}

console.log(result / arr.length)