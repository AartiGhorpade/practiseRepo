function trianglePattern() {
    for (let i = 0; i <= 5; i++) {
        let row = ""
        for (let j = 1; j <= i; j++) {
            row = row + i
        }
        console.log(row)
    }
}

trianglePattern()
