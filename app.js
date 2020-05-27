console.log(factorial(3)); // 3 * 2 * 1 = 6
console.log(factorial(4)); // 4 * 3 * 2 * 1 = 24

function factorial(number) {
  // let result = 1;
  // for (let i = 0; i < number; i++) {
  //   result = result * (number - i);
  // }
  // return result;

  return number === 1 ? 1 : number * factorial(number - 1);
}
