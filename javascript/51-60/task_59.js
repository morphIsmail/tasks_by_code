/*
Задача 59: Даны три числа. Найти наименьшее из них

Категория: Условный оператор

#category_if
*/
let A = 13
let B = 31
let C = 10
let result = 0

if(A < B) {
  result = A
} else {
  result = B
}

if(result < C) {
  console.log(result)
} else {
  console.log(C)
}

console.log(Math.min(A,B,C))