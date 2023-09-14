const counter1 = new Object();
counter1.value = 1;

const counter2 = {
  value: 2,
};

const counter3 = Object.create(null);
counter3.value = 3;

const counter4 = Object.assign({}, { value: 4 });

const counter5 = JSON.parse('{ "value": 5 }');

const counter6 = Object.fromEntries([['value', 6]]);
