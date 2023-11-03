/*
Задача 71: Дан набор из N чисел. Найти минимальный и максимальный из элементов данного набора и вывести их

Категория: Минимумы и максимумы

#category_minmax
*/
const arr = [10, 24, 7, 5, 9, 16]
let max = 0
let min = Infinity

for (let i = 0; i < arr.length; i++) {
  if(arr[i] > max) {
    max = arr[i]
  }
  if(arr[i] < min) {
    min = arr[i]
  }
}

console.log('Минимальный элемент:', min)
console.log('Максимальный элемент:', max)