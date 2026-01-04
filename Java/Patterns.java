// ****
// ****
// ****
// ****

// class Patterns {

//     public static void main(String[] args) {

//         for (int i = 1; i <= 4; i++) {
//             for (int j = 1; j <= 4; j++) {
//                 System.out.print("*");
//             }
//             System.out.println();
//         }
//     }
// }

// * * * * * 
// *       *
// *       *
// * * * * *

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 4;
//         int cols = 4;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= cols; j++) {
//                 if (i == 1 || i == rows || j == 1 || j == cols) {
//                     System.out.print("*");
//                 }else{
//                     System.out.print(" ");
//                 }
//             }
//             System.out.println();
//         }

//     }
// }

//  * 
//  * * 
//  * * * 
//  * * * * 

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 4;

//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= i; j++) {
//                 System.out.print("* ");
//             }
//             System.out.println();
//         }
//     }
// }

// * * * * *
// * * * *
// * * * 
// * *
// *

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = rows; j >= i; j--) {
//                 System.out.print("* ");
//             }
//             System.out.println();
//         }
//     }
// }

//         * 
//       * * 
//     * * * 
//   * * * * 

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 4;

//         for (int i = 1; i <= rows; i++) {
//             for (int j = rows; j >= i; j--) {
//                 System.out.print("  ");
//             }

//             for (int k = 1; k <= i; k++) {+
//                 System.out.print("* ");
//             }
//             System.out.println();

//         }
//     }
// }

// 1
// 12
// 123
// 1234
// 12345

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= i; j++) {
//                 System.out.print(j + " ");
//             }
//             System.out.println();
//         }
//     }
// }

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= rows + 1 - i; j++) {
//                 System.out.print(j + " ");
//             }
//             System.out.println();
//         }
//     }
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

// class Patterns {
//     public static void main(String[] args) {
//         int rows = 5;
//         int number = 1;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= i; j++) {
//                 System.out.print(number + " ");
//                 number++;
//             }
//             System.out.println();
//         }
//     }
// }

// 0
// 1 0
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= i; j++) {
//                 if ((i + j) % 2 == 0) {
//                     System.out.print("1");
//                 } else {
//                     System.out.print("0");
//                 }
//             }
//             System.out.println();
//         }
//     }
// }

// *      *
// **    **
// ***  ***
// ********
// ********
// ***  ***
// **    **
// *      *
// class Patterns {

//     public static void main(String[] args) {
//         int row = 4;
//         for (int i = 1; i <= row; i++) {
//             for (int j = 1; j <= i; j++) {
//                 System.out.print("*");
//             }
//             int spaces = 2 * (row - i);
//             for (int j = 1; j <= spaces; j++) {
//                 System.out.print(" ");
//             }

//             for (int j = 1; j <= i; j++) {
//                 System.out.print("*");
//             }

//             System.out.println();
//         }
//         for (int i = row; i >= 1; i--) {
//             for (int j = 1; j <= i; j++) {
//                 System.out.print("*");
//             }
//             int spaces = 2 * (row - i);
//             for (int j = 1; j <= spaces; j++) {
//                 System.out.print(" ");
//             }

//             for (int j = 1; j <= i; j++) {
//                 System.out.print("*");
//             }

//             System.out.println();
//         }
//     }
// }

//     *****
//    *****
//   *****
//  *****
// *****
// Solid rhombus

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;
//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= rows - i; j++) {
//                 System.out.print(" ");
//             }

//             for (int j = 1; j <= rows; j++) {
//                 System.out.print("*");
//             }

//             System.out.println();
//         }
//     }
// }

//     1 
//    2 2 
//   3 3 3 
//  4 4 4 4 
// 5 5 5 5 5 

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;

//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= rows - i; j++) {
//                 System.out.print(" ");
//             }
//             for (int j = 1; j <= i; j++) {
//                 System.out.print(i + " ");
//             }
//             System.out.println();
//         }
//     }
// }

//     1
//    212
//   32123
//  4321234
// 543212345

// class Patterns {

//     public static void main(String[] args) {
//         int rows = 5;

//         for (int i = 1; i <= rows; i++) {
//             for (int j = 1; j <= rows - i; j++) {
//                 System.out.print(" ");
//             }
//             for (int j = i; j >= 1; j--) {
//                 System.out.print(j);
//             }
//             for (int j = 2; j <= i; j++) {
//                 System.out.print(j);
//             }
//             System.out.println();
//         }
//     }
// }


//    *
//   ***
//  *****
// *******
// *******
//  *****
//   ***
//    *
class Patterns {

    public static void main(String[] args) {
        int rows = 4;

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            for (int j = i; j >= 1; j--) {
                System.out.print("*");
            }
            for (int j = 2; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }

        for (int i = rows; i >= 1; i--) {
            for (int j = 1; j <= rows - i; j++) {
                System.out.print(" ");
            }
            for (int j = i; j >= 1; j--) {
                System.out.print("*");
            }
            for (int j = 2; j <= i; j++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

// class Patterns {

// public static void main(String[] args) {

// }
// }

// class Patterns {

// public static void main(String[] args) {

// }
// }

// class Patterns {

// public static void main(String[] args) {

// }
// }

// class Patterns {

// public static void main(String[] args) {

// }
// }

// class Patterns {

// public static void main(String[] args) {

// }
// }

// class Patterns {

// public static void main(String[] args) {

// }
// }