const { fizzbuzz, rangeFizzBuzz } = require("./index");

describe("FizzBuzz", () => {
  describe("Return number when number is not multiple of three or five", () => {
    test("Should return 1 when number is 1", async () => {
      const result = fizzbuzz(1);
      expect(result).toStrictEqual(1);
    });

    test("Should return 2 when number is 2", async () => {
      const result = fizzbuzz(2);
      expect(result).toStrictEqual(2);
    });
  });

  describe("Return Fizz when number is multiple of three", () => {
    test("Should return Fizz when number is 3", async () => {
      const result = fizzbuzz(3);
      expect(result).toStrictEqual("Fizz");
    });

    test("Should return Fizz when number is 6", async () => {
      const result = fizzbuzz(6);
      expect(result).toStrictEqual("Fizz");
    });
  });

  describe("Return Buzz when number is multiple of five", () => {
    test("Should return Buzz when number is 5", async () => {
      const result = fizzbuzz(5);
      expect(result).toStrictEqual("Buzz");
    });

    test("Should return Buzz when number is 10", async () => {
      const result = fizzbuzz(10);
      expect(result).toStrictEqual("Buzz");
    });
  });

  describe("Return FizzBuzz when number is multiple of three and five", () => {
    test("Should return FizzBuzz when number is 15", async () => {
      const result = fizzbuzz(15);
      expect(result).toStrictEqual("FizzBuzz");
    });

    test("Should return FizzBuzz when number is 30", async () => {
      const result = fizzbuzz(30);
      expect(result).toStrictEqual("FizzBuzz");
    });
  });
});

describe("FizzBuzz between 2 numbers", () => {
  test("Should return empty string when numbers not defined", async () => {
    const result = rangeFizzBuzz();
    expect(result).toStrictEqual("");
  });

  test("Should return 12Fizz4BuzzFizz string when numbers are 1 to 6", async () => {
    const result = rangeFizzBuzz(1, 6);
    expect(result).toStrictEqual("12Fizz4BuzzFizz");
  });

  test("Should return FizzBuzz11Fizz1314FizzBuzz string when numbers are 9 to 15", async () => {
    const result = rangeFizzBuzz(9, 15);
    expect(result).toStrictEqual("FizzBuzz11Fizz1314FizzBuzz");
  });
});
