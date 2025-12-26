//  * * * *
//  *     *
//  *     *
//  * * * *

// let rows = 4
// let cols = 5

// for (let i = 1; i <= rows; i++) {
//     let row = ""
//     for (let j = 1; j <= cols; j++) {
//         if (i == 1 || i == rows || j == 1 || j == cols) {
//             row += "*"
//         } else {
//             row += " "
//         }
//     }
//     console.log(row);

// }


// * 
// * *
// * * *
// * * * *

// let rows = 4;


// for (let i = 1; i <= rows; i++) {
//     let prints = ""
//     for (let j = 1; j <= i; j++) {
//         prints += "* "
//     }
//     console.log(prints);
// }


// * * * * *
// * * * *
// * * * 
// * *
// *


let rows = 4;

for (let i = 1; i <= rows; i++) {
    let prints = ""
    for (let j = rows; j >= i; j--) {
        prints += "* "
    }
    console.log(prints);
}