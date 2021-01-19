let nodeinfo = [
  [5, 3],
  [11, 5],
  [13, 3],
  [3, 5],
  [6, 1],
  [1, 3],
  [8, 6],
  [7, 2],
  [2, 2],
];
//노드 배열 만들기
class Node {
  constructor(x, y, idx) {
    this.x = x;
    this.y = y;
    this.leftChild = null;
    this.rightChild = null;
    this.idx = idx;
  }
  set setleftChild(node) {
    this.leftChild = node;
  }
  set setrightChild(node) {
    this.rightChild = node;
  }
  get getleftChild() {
    return this.leftChild;
  }
  get getrightChild() {
    return this.rightChild;
  }
  get getIdx() {
    return this.idx;
  }
}

let nodeArr = [];
nodeinfo.forEach((coord, i) => {
  let node = new Node(coord[0], coord[1], i + 1);
  nodeArr.push(node);
});

// y를 기준으로 정렬하자
nodeArr.sort((a, b) => {
  return b.y - a.y;
});
//console.log(nodeArr);

let rootNode = nodeArr.shift();
console.log(rootNode);
makeTree(nodeArr, rootNode);

function searchParentNode(node, parentNode) {
  if (node.x < parentNode.x) {
    if (!parentNode.getleftChild) {
      parentNode.setleftChild = node;
      return parentNode;
    }
    parentNode = parentNode.getleftChild;
  } else if (node.x > parentNode.x) {
    if (!parentNode.getrightChild) {
      parentNode.setrightChild = node;
      return parentNode;
    }
    parentNode = parentNode.getrightChild;
  }
  return searchParentNode(node, parentNode);
}

function makeTree(nodeArr, rootNode) {
  nodeArr.forEach((node) => {
    // 탐색
    let parentNode = rootNode;
    // console.log('root', parentNode);
    // console.log('change', searchParentNode(node, parentNode));
    searchParentNode(node, parentNode);
  });
}
//전위 순회
let preorder = [];
function preOrder(rootNode) {
  if (!rootNode) {
    return 0;
  }
  preorder.push(rootNode.getIdx);
  preOrder(rootNode.getleftChild);
  preOrder(rootNode.getrightChild);
}
let postorder = [];
function postOrder(rootNode) {
  if (!rootNode) {
    return 0;
  }
  postOrder(rootNode.getleftChild);
  postOrder(rootNode.getrightChild);
  postorder.push(rootNode.getIdx);
}
console.log('rootNode', rootNode);
preOrder(rootNode);
postOrder(rootNode);
console.log(preorder);
console.log(postorder);
