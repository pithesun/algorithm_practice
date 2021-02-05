/*
나이순으로 정렬하되,
나이가 같으면 먼저 가입하는 사람이 앞에 오도록 한다.

나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수
*/

let input = "3\n\
21 Dohyun\n\
21 Junkyu\n\
20 Sunyoung".split("\n")
input.shift()

function bucketSort(arr, digit){

    //나이를 저장하는 인덱스배열
    let ageArr = new Array(201).fill(null).map(() => [])

    //Scatter the objects
    for(let i=0; i < arr.length; i++){
        let age = arr[i].split(' ')[0] * 1
        ageArr[age].push(arr[i])
    }
    //Sort the elements in each bucket
    for(let i=1; i <=digit; i++){
        bubbleSort(ageArr[i], ageArr[i].length)
    }

    //gather
    let gathered = []
    for(let mem of ageArr){
        if (mem.length != 0){
            gathered = gathered.concat(mem)
        }
    }

    let answer = ""
    for(let mem of gathered){
        answer += (mem + "\n")
    }
    console.log(answer.trim())

}

bucketSort(input, 3)
