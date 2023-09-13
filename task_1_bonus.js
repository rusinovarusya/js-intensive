const obj1 = { 
  here: { 
    is:"on", 
    other: "3" 
  }, 
  object: "Y" 
};

const obj2 = { 
  here: { 
    is: "on", 
    other: "2" 
  }, 
  object: "Y" 
};


const deepEqual = (obj1, obj2) => {
  var isEqual = true;
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (!keys1.every((item) => keys2.includes(item)) || !keys2.every((item) => keys1.includes(item))) {
    isEqual = false;
  } else {

    keys1.forEach((item) => {
      const value1 = obj1[item];
      const value2 = obj2[item];
      if (value1 instanceof Object || value2 instanceof Object) {
        isEqual = deepEqual(value1, value2);
      } else {
        if (value1 !== value2) {
          isEqual = false;
        }
      }
    });

    return isEqual;
  }
};
