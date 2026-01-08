

function reverseStr(str) {

    // 1st method
    // return str.split('').reverse().join('')


    // 2nd method
    // let newStr = ""

    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i]
    // }
    // return newStr


    // 3rd method

    return Array.from('arti').reduce((acc, cur) => cur + acc, '');

}

// console.log(reverseStr("arti"));


function reverseNumber(num) {
    let newNum = 0;

    if (num < 0) {
        return false;
    }

    // 1st method

    // while (num > 0) {
    //     newNum = newNum * 10 + num % 10
    //     num = Math.floor(num / 10)
    // }
    // return newNum

    // 2nd method

    return Number(num.toString().split("").reverse().join(""));
}

console.log(reverseNumber(546));


