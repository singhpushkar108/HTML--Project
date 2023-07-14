function numberChecker(numbers) {
  return function(number) {
    return numbers.includes(number);
  };
}

const checkNumber = numberChecker([1, 2, 3, 4, 5]);

console.log(checkNumber(3)); 
console.log(checkNumber(6)); 
