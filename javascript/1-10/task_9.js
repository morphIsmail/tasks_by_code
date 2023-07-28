/*
Задача 9: Даны целые числа K и N ( N > 0). Вывести N раз число K

Категория: Цикл с параметром

#category_for
*/

let K =- 5, N = 6
let result = ''

if(N>0) {
  for (let i=0; i<N; i++) {
    result += K
  }
} else {
  console.log('Ошибка')
}
console.log(result)