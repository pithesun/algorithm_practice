//프로그래머스 정렬

function solution(citations) {
    
    var array = citations.sort((a,b) => a - b)
    var len = array.length
   
    var h = 0;
    for (let i = 0; i < len; i++){
        if(len - i >= array[i]){
            h = array[i]
        }
        if(len - i > h && len - i < array[i]){
            h = len - i
        }
    }
    return h;
}