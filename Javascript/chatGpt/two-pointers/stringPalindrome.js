function checkPalindrome(str) {
  let arr = str.replaceAll(" ", "").toLowerCase();

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (!arr[start].match(/[a-z0-9]/i)) {
      start++;
    }

    if (!arr[end].match(/[a-z0-9]/i)) {
      end--;
    }
    if (arr[start] !== arr[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

console.log(checkPalindrome("A man, a plan, a canal: Panama"));
