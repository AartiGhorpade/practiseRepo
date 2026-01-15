function countOcc(str) {
    let counts = {};

    for (let char of str) {
        if (counts[char]) {
            counts[char] += 1;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(countOcc("hellodear"));
