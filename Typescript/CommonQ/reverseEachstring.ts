// function reverseStr(str: string) {
//   return str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");
// }

// console.log(reverseStr("hello world"));


function reverseStr(str: string) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseStr("hello world"));