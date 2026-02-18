// var isPalindrome = function (x) {
//     let orgval = x
//     let revVal = 0;

//     revVal = x.toString().split('').reverse().join('')


//     if (revVal == orgval) {
//         return true
//     } else {
//         return false
//     }


// };

// console.log(isPalindrome(121));


var isPalindrome = function (x) {

    if (x < 0) {
        return false
    }
    let orgval = x
    let revVal = 0;

    while (x > 0) {
        revVal = revVal * 10 + x % 10;
        x = Math.floor(x / 10)
    }

    if (revVal == orgval) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(121));