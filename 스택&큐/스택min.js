/**
 * 기본적인 push와 pop 기능이 구현되는 스택에서 최소값을 반환하는 min 함수를 추가하려고 한다. 
 * 어떻게 설계할 수 있겠는가?
 * push, pop, min 연산은 모두 O(1) 시간에 동작해야 한다.
 */

let target = []
let minStack = []

function min() {
    if (minStack.length === 0) return null
    return minStack.pop()
}
function push(v) {
    target.push(v);
    if (minStack.length === 0 || v < minStack[minStack.length -]) {
        minStack.push(v);
    }
}
function pop() {
    if (target.length === 0) return null
    let poped = target.pop()
    if (poped === minStack[minStack.length - 1]) {
        minStack.pop();
    }
}

function min() {
    if (minStack.length === 0) return null;
    return minStack[minStack.length - 1] // minStack.peek()
}

function push(v) {
    target.push(v)
    if (v < min()) {
        minStack.push(v)
    }
}

function pop() {
    if (target.length === 0) return null
    let poped = target.pop()
    if (poped === minStack[minStack.length - 1]) {
        minStack.pop();
    }
}

public class StackWithMin2 extends Stack {
    Stack s2;
    public StackWithMin2() {
        s2 = new Stack();
    }

    public void push(int value) {
        if (value <= min()) {
            s2.push(value);
        }
        super.push(value);
    }

    public Integer pop() {
        int value = super.pop();
        if (value === min()) {
            s2.pop()
        }
        return value;
    }

    public int min() {
        if (s2.isEmpty()) {
            return this.Integer.MAX_VALUE;
        } else {
            return this.s2.peek();
        }
    }
}