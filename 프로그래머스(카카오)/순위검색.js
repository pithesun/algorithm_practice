// ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"]
// ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]

function solution(info, query) {
    let scoreArr = new Array(1000001).fill(null).map(() => [])
    let infoScoreArr = []
    info.forEach((person) => {
        let [lang,sector,career,food, score] = person.split(' ')
        scoreArr[score].push([lang, sector, career, food])
        infoScoreArr.push(score*1)
    })
    let sortedScoreArr = infoScoreArr.sort((a,b) => a-b)
    let newinfoScore = Array.from(new Set(sortedScoreArr));

    //탐색
    let answer = []
    query.forEach((query) =>{
        let [lang,sector,career, foodandscore ] = query.split(' and ')
        let [food, qscore ] = foodandscore.split(' ')
        // console.log("query", lang, sector, career, food, qscore)

        let number = 0
        for(let score of newinfoScore.filter((infoScore) => infoScore >= qscore)) {
            // console.log(score)
            scoreArr[score].forEach(person => {
                if((lang === "-" ? true : person[0] === lang)&&
                (sector === "-" ? true : person[1] === sector)&&
                (career === "-" ? true : person[2] === career)&&
                (food === "-" ? true : person[3] === food) ){
                    // console.log("person", person)
                    number += 1
                }
            })
        }
        // console.log(number)
        answer.push(number)
    })
    return answer
}

solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"])