function solution(msg) {
  /* 사전 초기화 */
  let dict = new Map();
  for (let i = 0; i < 26; i++) {
    dict.set(String.fromCharCode(i + 65), i + 1);
  }
  let newidx = 27;

  let [cur, offset] = [0, 1];
  let answer = [];
  while (cur < msg.length) {
    /* 일치하는 가장 긴 문자열*/
    // console.log("cur", cur);
    let match = "";
    var k;
    while ((k = dict.get(msg.slice(cur, cur + offset)))) {
      offset++;
      if (cur + offset > msg.length) break;
    }
    offset--;
    match = dict.get(msg.slice(cur, cur + offset));

    // console.log(match, msg.slice(cur, cur + offset));
    answer.push(match);

    // 다음 글자가 남아 있다면
    if (msg[cur + offset]) {
      //   console.log(msg.slice(cur, cur + offset + 1));
      dict.set(msg.slice(cur, cur + offset + 1), newidx);
      newidx++;
    }
    cur = cur + offset;
    offset = 1;
  }

  return answer;
}
solution("KAKAO");
