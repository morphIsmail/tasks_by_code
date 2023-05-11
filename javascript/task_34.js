/*
Задача 34: Единицы массы пронумерованы следующим образом: 1 — килограмм, 2 — миллиграмм, 3 — грамм, 4 — тонна, 5 — центнер. Дан номер единицы массы (целое число в диапазоне 1–5) и масса тела в этих единицах (вещественное число). Найти массу тела в килограммах

Категория: Оператор выбора

#category_case
*/
let M = 5, type = 3

switch (type) {
  case 1:
    console.log(M)
    break
  case 2:
    console.log(M/1000000)
    break
  case 3:
    console.log(M/1000)
    break;
  case 4:
    console.log(M*1000)
    break
  case 5:
    console.log(M*100)
    break
  default:
    console.log('Ошибка')
    break
}