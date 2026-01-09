function smallestNum(arr) {
    // let min_No = arr[0];

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < min_No) {
    //         min_No = arr[i]
    //     }
    // }
    // return min_No

//    return arr.reduce((result, acc) => acc < result ? acc : result)

   return Math.min(...arr)
}

console.log(smallestNum([58, 68, 54, 75, 8741, 584, 85, -25, -56]));
