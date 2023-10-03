/*
Задача 65: Даны три числа. Найти среднее из них (то есть число, расположенное между наименьшим и наибольшим)

Категория: Условный оператор

#category_if
*/
const A = 3
const B = 1
const C = 2

if(A>B && A<C || A<B && A>C) {
  console.log(A)
}
if(B>A && B<C || B<A && B>C) {
  console.log(B)
}
if(C>B && C<A || C<B && C>A) {
  console.log(C)
}