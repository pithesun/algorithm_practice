var input = require('fs').readFileSync('/dev/stdin').toString();
let inputNum = Number(input)

let arr = new Array(inputNum+1).fill(0)

for(let i = 1; i <= inputNum; i++){
   if(i === 1) { arr[i] = 1 ;}
   else if(i === 2) { arr[2] = 3 }
   else if( i % 2 === 0 ){
    arr[i] = ((arr[i-1])*2 +1) % 10007                                                                                            
   }
   else if ( i % 2 !== 0){
     arr[i] = ((arr[i-1])*2 - 1) % 10007       
   } 
}

console.log(arr[inputNum])