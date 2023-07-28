/*
Задача 49: Даны три целых числа: A, B, C. Проверить истинность высказывания: «Число B находится между числами A и C»

Категория: Логические выражения

#category_boolean
*/
let A = 43
let B = 59
let C = 74

/*
if((A<B && B<C) || (A>B && B>C)) {
  console.log(true)
} else {
  console.log(false)
}
*/

console.log((A<B && B<C) || (A>B && B>C))