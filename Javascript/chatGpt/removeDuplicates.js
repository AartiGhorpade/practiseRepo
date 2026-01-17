// function removeDup(arr) {
//     // return new Set(arr)

//     let newArr = []

//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(removeDup([55, 2, 96, 55, 85, 96, 2]));


function checkArm(num) {
   let count = 0;
   while (num > 0) {
      count += 1;
      num = Math.floor(num / 10)
   }


}
console.log(checkArm(153));
