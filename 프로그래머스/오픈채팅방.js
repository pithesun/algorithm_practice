function solution(record) {
  let userdata = new Map();
  let temp = [];
  temp.forEach((row) => {
    let [log, id, nickname] = row.split(' ');
    //console.log(log, id, nickname)
    if (log !== 'Leave') {
      userdata.set(id, nickname);
    }
    if (log !== 'Change') {
      result.push([
        id,
        log === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.',
      ]);
    }
  });

  let result = [];
  temp.forEach((arr) => {
    arr[0] = userdata.get(arr[0]);
    let str = arr.join('');
    realresult.push(str);
  });

  return result;
}
