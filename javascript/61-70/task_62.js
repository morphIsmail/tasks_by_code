/*
Задача 62: Даны три числа. Найти сумму двух наибольших из них

Категория: Условный оператор

#category_if
*/
const A = 3
const B = 1
const C = 2
let result = 0

if(A>B || A>C) {
  result +=A
}
if(B>C || B>A) {
  result +=B
}
if(C>B || C>A) {
  result +=C
}

console.log(result)