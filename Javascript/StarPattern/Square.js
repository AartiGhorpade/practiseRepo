function squarePattern(num, num2) {
    for (let i = 0; i <= num; i++) {
        let row = ""
        for (let j = 0; j <= num2; j++) {
            row = row + "*"
        }
        console.log(row)
    }
}

squarePattern(5, 5)