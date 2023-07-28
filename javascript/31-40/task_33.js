/*
Задача 33: Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — февраль и т. д.). Вывести название соответствующего времени года («зима», «весна», «лето», «осень»)

Категория: Оператор выбора

#category_case
*/
let month = 10

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log('Зима')
    break
  case 3:
  case 4:
  case 5:
    console.log('Весна')
    break
  case 6:
  case 7:
  case 8:
    console.log('Лето')
    break
  case 9:
  case 10:
  case 11:
    console.log('Осень')
    break
  default:
    console.log('Ошибка')
}