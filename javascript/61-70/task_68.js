/*
Задача 68: Даны три переменные вещественного типа: A, B, C. Если их значения упорядочены по возрастанию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. Вывести новые значения переменных A, B, C

Категория: Условный оператор

#category_if
*/
let result = 0
let A = 17
let B = 13
let C = 24

if(A<B && B<C) {
  A *= 2
  B *= 2
  C *= 2
} else {
  result = A
  A = C
  C = result
}

console.log('A='+A+' B='+B+' C='+C)