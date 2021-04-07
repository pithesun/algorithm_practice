function solution(expression) {
  function StrToExp(opd1, opd2, opr) {
    switch (opr) {
      case '+':
        return opd1 + opd2;
      case '-':
        return opd1 - opd2;
      case '*':
        return opd1 * opd2;
      default:
        return;
    }
  }

  const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };

    permute(inputArr);

    return result;
  };
  // console.log("permuet", permutator(['*','+','-']))

  let opds = expression.split(/\D/);
  let oprs = [];
  expression.split('').forEach((el) => {
    if (el.match(/\D/)) {
      oprs.push(el);
    }
  });

  //console.log(opds, oprs)

  //new Exp 만들기
  let newExp = [];
  for (let i = 0; i < oprs.length; i++) {
    newExp.push(opds[i]);
    newExp.push(oprs[i]);
  }
  newExp.push(opds[opds.length - 1]);
  //console.log(newExp.slice())

  //계산하기
  function Cal(priority) {
    let leftStack = [];
    let priorOpr;
    let rightStack = newExp.slice();
    for (let i = 0; i < 3; i++) {
      // *, + , -

      priorOpr = priority.shift();
      //console.log(priorOpr)
      while (rightStack.length > 0) {
        if (rightStack[0] === priorOpr) {
          //console.log("priority", leftStack.slice(),"new", rightStack.slice())
          let leftopd = leftStack.pop();
          let opr = rightStack.shift();
          let rightopd = rightStack.shift();

          leftStack.push(StrToExp(parseInt(leftopd), parseInt(rightopd), opr));
        } else {
          leftStack.push(rightStack.shift());
        }
      }
      //console.log("left", leftStack.slice(), "right", rightStack.slice())

      //swap
      let temp = leftStack.slice();
      leftStack = rightStack.slice();
      rightStack = temp;
    }

    return Math.abs(rightStack[0]);
  }

  let max = 0;
  //console.log(permutator(['*','+','-']))
  permutator(['*', '+', '-']).forEach((priority) => {
    //console.log(priority.slice())
    let result = Cal(priority.slice());
    //console.log(result)
    if (result > max) {
      max = result;
    }
  });
  return max;
}
