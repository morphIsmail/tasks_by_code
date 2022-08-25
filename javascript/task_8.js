/*
Задача 8: Дано целое число в диапазоне 1–7. Вывести строку — название дня недели, соответствующее данному числу (1 — «понедельник», 2 — «вторник» и т. д.)

Категория: Оператор выбора

#category_case
*/

let day = 5

switch(day) {
  case 1:
    console.log('Понедельник')
    break
  case 2:
    console.log('Вторник')
    break 
  case 3:
    console.log('Среда')
    break
  case 4:
    console.log('Четверг')
    break  
  case 5:
    console.log('Пятница')
    break
  case 6:
    console.log('Суббота')
    break  
  case 7:
    console.log('Воскресенье')
    break
  default:
    console.log('Неизвестно')
}