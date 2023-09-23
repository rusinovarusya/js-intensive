// Создать объект `Person` несколькими способами, после создать объект `Person2`, 
// чтобы в нём были доступны методы объекта `Person`. Добавить метод `logInfo` чтоб он был доступен всем объектам.

const Person = { 
  name: "Name", 
  age: 100, 
  sayHi() { 
    console.log(`Hi! My name is ${this.name}`); 
  } 
};

const Person2 = Object.create(Person);

Person.sayHi();
Person2.sayHi();

Person.logInfo = function() {
  console.log(this.name + " " + this.age);
}

Person.logInfo();
Person2.logInfo();
