/*
Задача 38: Дано целое число N (> 0). Если оно является степенью числа 3, то вывести True, если не является — вывести False

Категория: Цикл с условием

#category_while
*/
let N = 8

function isPow3(n) {
  let i = 1
  while (i < n) {
    if(Math.pow(3, i) === n) {
      return true
    }
    i++
  }
  return false
}

console.log(isPow3(N))