/*
Задача 50: Даны два числа. Вывести вначале большее, а затем меньшее из них

Категория: Условный оператор

#category_if
*/
let A = 53
let B = 41

if(A>B) {
  console.log(A, B)
} else {
  console.log(B, A)
}

if(A>B)
  console.log(A, B)
else
  console.log(B, A)

A > B ? console.log(A, B) : console.log(B, A)