
const removeFromArray = function (array, ...num) {
  function removeItem(item) {
    if (num.includes(item)) {
      return false;
    }
    return true;
  }

  const novoArray = array.filter((removeItem))

  return novoArray;
};


// Do not edit below this line
module.exports = removeFromArray;