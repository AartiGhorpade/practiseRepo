// function twoSum(arr, target) {

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j <= arr.length; j++) {
//             if (arr[i] + arr[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
// }

// console.log(twoSum([2, 7, 9, 5, 2, 47, 4], 9));


function twoSumAll(arr, target) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                result.push([i, j])
            }
        }
    }
    return result
}

console.log(twoSumAll([2, 7, 9, 5, 2, 47, 4], 9));
