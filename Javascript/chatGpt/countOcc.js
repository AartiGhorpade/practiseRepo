function countOcc(str) {
    let count = {}

    for (val of str) {
        if (count[val]) {
            count[val] += 1
        } else {
            count[val] = 1
        }
    }
    return count
}

console.log(countOcc("hello"));
