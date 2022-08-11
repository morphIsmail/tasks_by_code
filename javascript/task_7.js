/*
Задача 7: Даны три целых числа. Найти количество положительных и количество отрицательных чисел в исходном наборе

Категория: Условный оператор

#category_if
*/

let positive = 0, negative = 0 // это счетчики, для того чтобы подсчитать количество положительных (positive) и отрицательных (negative) чисел

let a = 5, b = 0, c = -1 // числа которые будем проверять

if(a > 0) {
  positive++
} else if(a < 0) {
  negative++
}

if(b > 0) {
  positive++
} else if(b < 0) {
  negative++
}

if(c > 0) {
  positive++
} else if(c < 0) {
  negative++
}

console.log(`Положительных чисел: ${positive}\nОтрицательных чисел: ${negative}`)