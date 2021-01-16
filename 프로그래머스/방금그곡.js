function solution(m, musicinfos) {
  let answer = ['(None)', 0];
  let marr = m.match(/(\D\#|\D)/g);

  musicinfos.forEach((music) => {
    let [start, end, title, melody] = music.split(',');
    let [sthour, stminute] = start.split(':');
    let [endhour, endminute] = end.split(':');
    let playtime =
      (parseInt(endhour) - parseInt(sthour)) * 60 +
      parseInt(endminute) -
      parseInt(stminute);
    let playmusic = [];

    //재생된 멜로디
    let melodyarr = melody.match(/(\D\#|\D)/g);
    //console.log("melodyarr", melodyarr.length);

    let wholemelody = Math.floor(playtime / melodyarr.length);
    let submelody = playtime % melodyarr.length;
    for (let i = 0; i < wholemelody * melodyarr.length + submelody; i++) {
      playmusic.push(melodyarr[i % melodyarr.length]);
    }
    //console.log(title, playmusic)

    for (let i = 0; i < playmusic.length - marr.length + 1; i++) {
      let temp = playmusic.slice(i, i + marr.length);
      //console.log(temp.join(""))

      //멜로디가 일치할 때
      if (temp.join('') === m) {
        //console.log("일치")
        if (answer[1] < playtime) {
          answer[0] = title;
          answer[1] = playtime;
        }
        break;
      }
    }
  });

  return answer[0];
}
