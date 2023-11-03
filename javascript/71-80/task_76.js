/*
Задача 76: Дано целое число N (32 ≤ N ≤ 126). Вывести символ с кодом, равным N

Категория: Символы и строки

#category_string
*/
const N = 100

if(N>=32 && N<=126) {
  console.log(String.fromCharCode(N))
}