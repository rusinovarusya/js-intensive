# js-intensive
	
Занятие 6 - Ассинхронность в JS (Promise && EventLoop)
Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли): 

# 1.
``let promiseTwo = new Promise((resolve, reject) => {
   resolve("a");
});

promiseTwo
.then((res) => {
   return res + "b";
})
.then((res) => {
   return res + "с";
})
.finally((res) => {
   return res + "!!!!!!!";
})
.catch((res) => {
   return res + "d";
})
.then((res) => {
   console.log(res); // "abc"
});``

# 2.
``function doSmth() {
   return Promise.resolve("123");
}

doSmth()
.then(function (a) {
   console.log("1", a); // "1123"
   return a;
})
.then(function (b) {
   console.log("2", b); // "2123"
   return Promise.reject("321");
})
.catch(function (err) {
   console.log("3", err); // "3321"
})
.then(function (c) {
   console.log("4", c); // "4123"
return c;
});``

# 3. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
Входные данные: [10, 12, 15, 21]

const nums = [10, 12, 15, 21];
nums.forEach((_, i) => setTimeout(() => console.log(i), 3000 * (i + 1)));

# 4. Прочитать про Top Level Await (можно ли использовать await вне функции async)

Нет, await нельзя использовать вне функций, объявленных с async - иначе получим синтаксическую ошибку.
Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.

Формально можно объявить анонимную функцию и сразу ее вызвать (пример из [javascript.ru](https://learn.javascript.ru/async-await)):
(async () => {
  let response = await fetch('/article/promise-chaining/user.json');
  let user = await response.json();
  ...
})();
