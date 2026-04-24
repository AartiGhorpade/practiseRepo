function checkSecondLargest(arr) {
  if (arr.length === 0) {
    return false;
  } else if (arr.length < 2) {
    return "Array should have at least 2 elements to find the second largest.";
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(checkSecondLargest([10, 20, 20, 10, 5]));
