/*
정렬된 배열 A,B
A의 끝에는 B를 전부 넣을 수 있을 만큼 충분한 여유공간이 있다.
B와 A를 정렬된 상태로 병합하는 메소드
*/

function alignedMerge(A, B) {
    let idx = A.length + B.length - 1;
    let aidx = A.length - 1;
    let bidx = B.length - 1;

    while (idx > 0) {
        if (A[aidx] < B[bidx]) {
            A[idx] = B[bidx]
            bidx--;
        } else {
            A[idx] = A[aidx]
            aidx--;
        }
        idx--;
        console.log(aidx, bidx)
    }
    return A
}

console.log(alignedMerge([1, 4, 5], [2, 3]))