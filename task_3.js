function makeCounter1(count) {
  return count + 1;
}

const makeCounter2 = function(count) {
  return count + 1;
}

const makeCounter3 = (count) => count + 1;

const makeCounter4 = function makeCounter(count) {
  return count + 1;
}

function makeCounter() {
  let count = 1;
  return function() {
    return count++;
  };
}
const makeCounter5 = makeCounter();
