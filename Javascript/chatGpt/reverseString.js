

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

console.log(reverseStr("arti"));

