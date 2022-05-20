const fizzbuzz = (number) => {
  return number % 15 === 0
    ? "FizzBuzz"
    : number % 5 === 0
    ? "Buzz"
    : number % 3 === 0
    ? "Fizz"
    : number;
};

const rangeFizzBuzz = (start, end) => {
  let result = "";
  for (let i = start; i <= end; i++) {
    result += fizzbuzz(i);
  }
  return result;
};

module.exports = { fizzbuzz, rangeFizzBuzz };
