function moveZeros(arr) {
  let slow = 0;

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i] == 0) {
      arr[slow] = arr[i];
      slow++;
    }
  }

  for (let i = slow; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr
}

console.log(moveZeros([0, 1, 0, 3, 12]));
