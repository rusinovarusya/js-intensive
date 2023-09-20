# js-intensive

1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие?
2. Привязать контекст объекта к функции `logger`, чтобы при вызове `this.item` выводило - `some value` (Привязать через `bind`, `call`, `apply`)


``function logger() {
    console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };``

Бонус задание: Реализовать полифил (собственную функцию реализующую встроенную в js) метода `bind()`
