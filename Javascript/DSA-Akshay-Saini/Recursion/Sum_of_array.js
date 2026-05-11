let sum = 0;
let i = 0;
function recursion(arr) {
  if (i == arr.length) return;
  sum += arr[i];
  i++;
  recursion(arr);
  return sum;
}

console.log(recursion([1, 2, 3, 4, 5])); // 15
