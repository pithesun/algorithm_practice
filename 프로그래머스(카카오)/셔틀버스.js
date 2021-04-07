// ['09:10', '09:09', '08:00']
// ['08:00', '08:01', '08:02', '08:03']
// 2, 1, 2, ['09:00', '09:00', '09:00', '09:00']
// 1	1	5	[00:01, 00:01, 00:01, 00:01, 00:01]
// 1,1,1	['23:59']
// 10,60,45	['23:59','23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59', '23:59']

//n 시행 횟수
//t 시행 간격
//m 배차 인원
let [n, t, m, timetable] = [2, 1, 2, ['09:00', '09:00', '09:00', '09:00']];
const startTime = '09:00';
let answer = '';

//timetable 정렬
timetable.sort((a, b) => {
  return TimeToInt(a) - TimeToInt(b);
});
console.log(timetable);
//버스테이블
let bustable = new Array(n);
let lastbus = 9 * 60 + (n - 1) * t;
let possibletime = timetable.filter((crew) => {
  let crewtime = TimeToInt(crew);
  return crewtime <= lastbus;
});

let waitingCrewsNum = possibletime.length;
let tableIndex = 0; // timetable 삭제 인덱스

function StrToTime(sum) {
  let hour = Math.floor(sum / 60);
  let minute = sum % 60;
  let answer =
    (hour < 10 ? `0${hour}` : `${hour}`) +
    ':' +
    (minute < 10 ? `0${minute}` : `${minute}`);
  return answer;
}
function TimeToInt(time) {
  let [hour, minute] = time.split(':');
  hour = parseInt(hour);
  minute = parseInt(minute);
  return hour * 60 + minute;
}

function solution() {
  if (!possibletime.length) {
    return StrToTime(lastbus);
  }
  for (let i = 0; i < n; i++) {
    // 버스테이블
    let curbus = 9 * 60 + i * t;
    let curCrewnum = 0;

    //마지막 운행 때의 대기열
    if (i === n - 1) {
      //m보다 적은 수가 대기열에 남아있다면 마지막 운행 시간이 정답
      if (waitingCrewsNum - tableIndex < m) {
        answer = StrToTime(lastbus);
        return answer;
      } else {
        //그렇지 않다면 마지막에 탄 사람보다 1분 빨리 도착
        for (let j = tableIndex; j < waitingCrewsNum; j++) {
          let crewtime = TimeToInt(possibletime[j]);
          if (crewtime > curbus) {
            break;
          }
          if (curCrewnum === m) {
            break;
          }
          answer = StrToTime(crewtime - 1);
          curCrewnum++;
          tableIndex++;
        }

        //탈 수 없는 사람들만 있다면 -- answer이 정의되지 않고 break 되었을 때
        if (!answer) {
          answer = StrToTime(lastbus);
        }

        return answer;
      }
    }

    //버스에 타는 크루들 => 대기열 줄이기
    for (let j = tableIndex; j < waitingCrewsNum; j++) {
      let crewtime = TimeToInt(possibletime[j]);

      if (crewtime > curbus) {
        break;
      }
      if (curCrewnum === m) {
        //만차가 되었을 때
        break;
      }
      curCrewnum++; // 불필요하게 +1 될 수 있다.
      tableIndex++; //
    }
  }
}

console.log(solution());
