class PersonThree {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

const Person = PersonThree; // другая ссылка на тот же класс

class ClassFromPerson extends Person { // сделать класс наследник от класса `Person`
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
}
