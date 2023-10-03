/*
Задача 67: Дан номер месяца — целое число в диапазоне 1–12 (1 — январь, 2 — февраль и т. д.). Определить количество дней в этом месяце для не високосного года

Категория: Оператор выбора

#category_case
*/
const month = 11

switch(month) {
  case 2:
    console.log(28)
    break
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(30)
    break
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log(31)
    break
}