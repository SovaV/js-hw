function findLongestWord(string) {
  let arrSstring = string.split(" ");
  let total = 0;
  let sum = "";
  for (let i = 0; i < arrSstring.length - 1; i += 1) {
    total = arrSstring[1].length;
    if (arrSstring[i].length > total) {
      sum = arrSstring[i];
      console.log(sum);
      return sum;
    }
  }
}

const tempestString = "The quick brown fox jumped over the lazy dog";
findLongestWord(tempestString);

/*
Задача: поиск самого длинного слова
Задание
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string)
Вызов функции findLongestWord("The quick brown fox jumped over the lazy dog") возвращает jumped
Вызов функции findLongestWord("Google do a roll") возвращает Google
Вызов функции findLongestWord("May the force be with you") возвращает force
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение
*/
