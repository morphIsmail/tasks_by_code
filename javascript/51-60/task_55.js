/*
Задача 55: Описать функцию IsSquare(K) логического типа, возвращающую True, если целый параметр K (> 0) является квадратом некоторого целого числа, и False в противном случае. С ее помощью найти количество квадратов в наборе из 10 целых положительных чисел

Категория: Процедуры и функции

#category_proc
*/
let K = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function IsSquare(k) {
  let i = 1
  while (i < k) {
    if(Math.pow(2, i) == k) {
      return {number: k, IsSquare: true}
    }
    i++
  }
  return {number: k, IsSquare: false}
}

for (let i = 0; i < K.length; i++) {
  console.log(IsSquare(K[i]))
}