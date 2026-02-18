let data = [2, 4, 6, [8, 10, 12, [14, 16, 18]], [20, 22]]
let collect = []

function flatten(data) {
    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            flatten(data[i])
        } else {
            collect.push(data[i])
        }
    }
}

flatten(data)
console.log(collect)
