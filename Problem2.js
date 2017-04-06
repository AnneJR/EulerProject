var fibArray = [];
var evenFib = [];
var sum = 0;

fibArray[1] = 0;
fibArray[2] = 1;
 
for (var i = 3; i < 20; i++) {
  fibArray[i] = fibArray[i-2] +fibArray[i-1];
  if (fibArray[i]%2 ===0) {
     evenFib.push(fibArray[i]);		 
  }
    }

 for (var j=0; j < evenFib.length; j++) {
   sum += evenFib[j];
 }

console.log(sum);
