// let fact = 1;

// function factorial(n) {
//   if (n == 0) return 1;

//   fact *= n;

//   factorial(n - 1);
//   return fact;
// }

// console.log(factorial(5));

function factorial(n) {
  if (n == 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5));
