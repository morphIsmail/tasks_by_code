/*
Задача 70: Единицы длины пронумерованы следующим образом: 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр. Дан номер единицы длины (целое число в диапазоне 1–5) и длина отрезка в этих единицах (вещественное число). Найти длину отрезка в метрах

Категория: Оператор выбора

#category_case
*/
const length = 1000
const type = 4

switch(type) {
  case 1: // дециметр
    console.log(`${length} (дм) = ${length/10} (м)`)
  break
  case 2: // километр
    console.log(`${length} (км) = ${length*1000} (м)`)
  break
  case 3: // метр
    console.log(`${length} (м)`)
  break
  case 4: // миллиметр
    console.log(`${length} (мм) = ${length/1000} (м)`)
  break
  case 5: // сантиметр
    console.log(`${length} (см) = ${length/100} (м)`)
  break
  default:
    console.log('Некорректные данные')
}