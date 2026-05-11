let sum = 0;

function sumRec(num) {
  if (num == 0) return;
  sum += num;
  sumRec(num - 1);
  return sum;
}

console.log(sumRec(5));
