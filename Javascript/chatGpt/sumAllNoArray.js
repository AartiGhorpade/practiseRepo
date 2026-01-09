function allSum(arr) {
    // let sum = 0
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i]
    // }
    // return sum

    return arr.reduce((result, acc) => result + acc)
}

console.log(allSum([2, 7, 5, 8, 95, 63, 54, 45]));
