/*
Задача 4: Дано целое число A. Проверить истинность высказывания: «Число A является положительным»

Категория: Логические выражения

Во всех заданиях данной группы требуется вывести логическое значение True, если приведенное высказывание для предложенных исходных данных является истинным, и значение False в противном случае. Все числа, для которых указано количество цифр (двузначное число, трехзначное число и т. д.), считаются целыми положительными.

#category_boolean
*/

let A = 5
console.log(A > 0)

/*
Можно решить и другим способом, но как видно из примера он сложней и требует проверки условия

if(A > 0) // если число больше чем 0 то оно положительное
  console.log(true) // в таком случае вывести true / истина
else
  console.log(false) // в противном случае вывести false / ложь
*/