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
   console.log(res); // "abcd"
});``

# 2.
``function doSmth() {
   return Promise.resolve("123");
}

doSmth()
.then(function (a) {
   console.log("1", a); // "1"
   return a;
})
.then(function (b) {
   console.log("2", b); // 
   return Promise.reject("321");
})
.catch(function (err) {
   console.log("3", err); //
})
.then(function (c) {
   console.log("4", c); //
return c;
});``

# 3. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
Входные данные: [10, 12, 15, 21]

const arr = [10, 12, 15, 21];
arr.forEach(num => { let j = num; setTimeout(j => console.log(num), 3000); });

const arr = [10, 12, 15, 21];
arr.forEach((num) => { setTimeout(() => console.log(num), 3000); });

# 4. Прочитать про Top Level Await (можно ли использовать await вне функции async)
