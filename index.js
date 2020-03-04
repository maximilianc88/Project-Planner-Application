"use strict";
const accumulate = max => {
  if (max === undefined || max === null || isNaN(max)) {
    return null;
  } else if (max < 1) {
    return max;
  } else {
    let sum = 0;
    for (let i = 1; i <= max; ++i) {
      sum += i;
    }
    return sum;
  }
};

module.exports = accumulate;
