/*
Задача 45: Даны три точки A, B, C на числовой оси. Найти длины отрезков AC и BC и их сумму

Категория: Ввод и вывод данных, оператор присваивания 

#category_begin
*/
let A = 10
let B = 7
let C = 14

let AC = Math.abs(A-C)
let BC = Math.abs(B-C)

console.log("AC:", AC)
console.log("BC:", BC)
console.log("AC+BC:", AC+BC)