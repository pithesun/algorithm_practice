// 

let str = ""
function hanoi(n, start, by, to) {
    if (n === 1) {
        str += `${start} ${to}\n`
        // console.log(start, to)
        return
    }
    hanoi(n - 1, start, to, by)
    str += `${start} ${to}\n`
    hanoi(n - 1, by, start, to)
}

let num = 3
console.log((1 << num) - 1)
hanoi(num, 1, 2, 3);
console.log(str)
