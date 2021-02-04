/*

length 메서드가 없는 Listy 자료구조
Listy[i]
    i 인덱스에 위치한 원소를 O(1) 시간에 알 수 있음 
    i가 배열의 범위를 넘어서면 undefined return
indexOf(x): 원소 x의 인덱스를 찾는 알고리즘 (logN)

*/

function indexOf(list, X){
    let exp = 0;
    let idx = Math.pow(2, exp)

    while(true){
        if(list[idx] === undefined) {
            break
        }
        exp++;
        idx = Math.pow(2, exp)
    }

    let low = 0
    let high = idx

    while(low < high){
        let mid = (low + high)/2
        if(X > list[mid]){
            low = mid + 1
        }else if(X === list[mid]){
            return mid;
        }else{// list[mid] === -1 또는 list[mid] > X
            high = mid - 1
        }
    }

    return -1 // 에러 
}

console.log(indexOf([1,2,3], 2))