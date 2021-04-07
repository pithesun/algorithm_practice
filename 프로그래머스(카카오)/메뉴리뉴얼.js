// ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
// [2,3,4]
// 조합과 객체 map 사용

let combArr = []
function select(arr, temp, final, num){
    if(num === 0) return final
    while(arr.length > 0){
        let newone = temp + arr.shift()
        // console.log(newone)
        combArr.push(newone)
        select(arr.slice(), newone, final, num -1 )
    }
}

function combination(arr, num, final){
    // num 2
    while(arr.length > 0){
        let first = arr.shift()
        select(arr.slice(), first, final, num)
    }
    return combArr.filter((el => el.length == num+1 ))
}

function solution(orders, course) {
    let result = []
    for(let num of course){
        let map = new Map()
        let newArr;
        for(let order of orders){
            newArr = combination(order.split('').sort(), num-1, [])
            // console.log(newArr)
        }
        for(let one of newArr){
            let origin = map.get(one)
            if(map.get(one)){map.set(one, origin + 1)}
            else{ map.set(one, 1)}
        }
        //sort
        let max = 0
        let maxMenu = []
        map.forEach( (value, key, map) => {
            if(value >= 2){
                if(value > max){
                    max = value
                    maxMenu = [key]
                    // console.log(max, maxMenu)
                }else if (value === max){
                    max = value
                    maxMenu.push(key)
                    // console.log(max, maxMenu)
                }
            }
           
        });
        result=result.concat(maxMenu)
    }
    console.log(result.sort())
}

solution( ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5] )