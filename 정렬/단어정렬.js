let input = "13\n\
but\n\
i\n\
wont\n\
hesitate\n\
no\n\
more\n\
no\n\
more\n\
it\n\
cannot\n\
wait\n\
im\n\
yours"


let arr = input.split("\n")
arr.shift()

/**
* 길이가 짧은 것부터
* 길이가 같으면 사전 순으로
*  단, 같은 단어가 여러 번 입력된 경우에는 한 번씩만 출력
 */

let reduced = arr.reduce((prev, cur) => {
    if (!prev.includes(cur)) {
        prev.push(cur)
    }
    return prev
}, [])

// console.log("reduced", reduced)

reduced.sort((a, b) => {
    let [aleng, bleng] = [a.length, b.length]
    if (aleng === bleng) {
        if (a < b) {
            return -1
        }
        if (a > b) {
            return 1;
        }
    }
    return a.length - b.length
})

console.log(reduced.join("\n").trim())
