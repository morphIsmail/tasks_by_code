/*
Задача 63: Дано целое число N (> 0). Найти сумму 1 + 1/2 + 1/3 + ... + 1/N (вещественное число)

Категория: Цикл с параметром

#category_for
*/
const N = 15
let result = 0

for (let i = 1; i < N; i++) {
  result += 1/i
}

console.log(result)