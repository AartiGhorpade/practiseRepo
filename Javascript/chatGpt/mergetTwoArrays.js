function mergeArr(arr, arr1) {


    // return new Set([...arr, ...arr1])

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }

    for (let i = 0; i < arr1.length; i++) {
        if (!newArr.includes(arr1[i])) {
            newArr.push(arr1[i])
        }
    }
    return newArr

}

console.log(mergeArr([2, 5, 7, 5], [3, 9, 6, 7, 4, 5, 2]));
