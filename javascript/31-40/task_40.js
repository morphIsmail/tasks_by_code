/*
Задача 40: Описать функцию SumRange(A, B) целого типа, находящую сумму всех целых чисел от A до B включительно (A и B — целые). Если A > B, то функция возвращает 0. С помощью этой функции найти суммы чисел от A до B и от B до C, если даны числа A, B, C

Категория: Процедуры и функции

#category_proc
*/
let A = 2
let B = 7
let C = 13

function SumRange(a, b) {
  if(a>b) return 0
  let sum = 0
  for(let i=a; i<=b; i++) {
    sum+=i
  }
  return sum
}

console.log(`Сумма чисел от A до B: ${SumRange(A,B)}`)
console.log(`Сумма чисел от B до C: ${SumRange(B,C)}`)