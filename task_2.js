const counter = {
  value: 0,
};


const counterCopy1 = Object.assign({}, counter);

const stringCopy = JSON.stringify(counter);
const counterCopy2 = JSON.parse(stringCopy);

const entries = Object.entries(counter);
const counterCopy3 = Object.fromEntries(entries);


function copyObject(obj) {
  const objCopy = {};
  const keys = Object.keys(obj);

  for (let key of keys) {
    const value = obj[key];
    objCopy[key] = (typeof value === "object") ? copyObject(value) : value;
  }

  return objCopy;
}

const counterCopy4 = copyObject(counter);

const counterCopy5 = structuredClone(counter);

const counterCopy6 = Object.create(counter);
const keys = Object.keys(counter);
keys.forEach(key => counterCopy6[key] = counter[key]);

const counterCopy7 = {
  __proto__: Object.getPrototypeOf(counter),
  ...counter,
};
