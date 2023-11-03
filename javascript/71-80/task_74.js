/*
Задача 74: Дано целое число N и набор из N прямоугольников, заданных своими сторонами — парами чисел (a, b). Найти минимальную площадь прямоугольника из данного набора

Категория: Минимумы и максимумы

#category_minmax
*/
const arr = [
  {a: 7, b: 3},
  {a: 5, b: 3},
  {a: 3, b: 4},
  {a: 3, b: 6},
]
let min = Infinity

for (let i = 0; i < arr.length; i++) {
  let S = arr[i].a * arr[i].b
  console.log(`a=${arr[i].a} b=${arr[i].b} S=${S}`)
  if(S<min) {
    min = S
  }
}

console.log(`Минимальная площадь: ${min}`)