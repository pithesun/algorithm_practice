
// print("*")

// let result = div(n)
// console.log(result)
//최소한의 단위까지 쪼개기
// function div(n) {
//     if (n === 3) {
//         return print("*")
//     }
//     let answer = ""
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (i === 1 && j === 1) {
//                 //빈칸 만들기
//                 answer += makeBlack(n / 3)
//                 continue;
//             }
//             let tmp = div(n / 3)
//             console.log(tmp)
//             answer += tmp
//         }
//         answer += '\n'
//     }
//     return answer
// }

// function makeBlack(n) {
//     let result = ""
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             result += "*"
//         }
//         result += "\n"
//     }
//     console.log(result)
//     return result
// }

// function print(str) {
//     let pict = ""
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (i === 1 && j === 1) {
//                 pict += " "
//                 continue
//             }
//             pict += str
//         }
//         pict += '\n'
//     }
//     // console.log(pict)
//     return pict
// }

// let N = 27

// function star(n, row, col) {
//     if (Math.floor(row / n) % 3 == 1 && Math.floor(col / n) % 3 == 1) {
//         return ' '
//     }
//     if (n === 1) return '*'

//     let answer = ""
//     answer += star(n / 3, row, col)

//     return answer
// }

// let answer = ""
// for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//         answer += star(N / 3, i, j)
//     }
//     answer += "\n"
// }
// console.log(answer)

function copyMatrix(matrix) {
    const size = matrix.length;
    const newMatiex = Array(size * 3).fill("");
    for (let i = 0; i < size; i += 1) {
        const str = matrix[i];
        newMatiex[i] = str.repeat(3);
        newMatiex[i + size] = str + " ".repeat(size) + str;
        newMatiex[i + size * 2] = newMatiex[i];
    }
    return newMatiex;
}

function solution(size) {
    let matrix = ["*"];
    for (let i = 1; i < size; i *= 3) {
        matrix = copyMatrix(matrix);
        console.log(matrix)
    }
    return matrix.join("\n");
}

console.log(solution(+input));