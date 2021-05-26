// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

const MAXSIZE = 1000;
var stack = new Array(MAXSIZE + 1).fill();
let top = -1;

//에러처리
function push(x) {
    top++;
    stack[top] = x
}

function pop() {
    let result = stack[top]
    if (top < 0) {
        return -1;
    }
    top--;
    return result;
}

function size() {
    return top + 1;
}

function empty() {
    if (top < 0) {
        return 1;
    }
    return 0;
}

function peek() {
    return stack[top]
}

let result = "";
push(1)
push(2)
result += peek() //2
result += empty() //0
result += pop() //2
result += size()//1
console.log(result)