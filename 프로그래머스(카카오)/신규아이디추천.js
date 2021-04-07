// "...!@BaT#*..y.abcdefghijklm"	"bat.y.abcdefghi"
//"z-+.^."	"z--"
// "=.="	"aaa"
// "123_.def"	"123_.def"
// "abcdefghijklmn.p"	"abcdefghijklmn"

function solution(new_id) {
    var answer = '';
    //1단계
    let first = new_id.toLowerCase()
    //2단계
    let second = first.match(/([a-z]|[0-9]|(\_)|(\-)|(\.))/g).join('')
    //3단계
    let third = second.replace(/(\.)\.+/g, ".")
    //4단계 
    let fourthFunc = (arr) => {
        let low, high
        if(arr[0] == "."){ low = 1}
        if(arr[arr.length -1] == "."){high = arr.length - 1 }
        let newarr = arr.slice(low, high)
        return newarr
    }
    let fourth = fourthFunc(third)
    console.log(fourth)
    //5단계
    let fifth = fourth
    if(fifth.length === 0){
        fifth = "a"
    }
    //6단계 
    let sixth = fifth
    if(sixth.length > 15){
        sixth = fourthFunc(sixth.slice(0, 15))
    }
    console.log("six", sixth)

    //7단계
    let seventh =  sixth
    while(seventh.length <= 2){
        seventh += seventh[seventh.length-1]
    }
    console.log(seventh)
    
}

solution("abcdefghijklmn.p")