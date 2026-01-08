function findLargest(arr) {
    // let max = arr[0];

    // 1st method

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //         max = arr[i]
    //     }
    // }

    // 2nd method
    // return Math.max(...arr)

    // 3rd method
    return arr.reduce((result, acc) => acc > result ? acc : result)

    // return max
}

console.log(findLargest([25, 6985, 85, 74, 855, 365]));
