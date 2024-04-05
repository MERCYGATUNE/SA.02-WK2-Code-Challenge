// WRITE A FUNCTION THAT ACCEPTS TWO NUMBERS TO GENERATE AN ARRAY BETWEEN THEM.

function generateArray(start,end){ 
 let result=[];
 
 const step = start <= end ? 1 : -1;
   
    for (let i = start; i !== end + step; i += step) {
      result.push(i);
    }
  return result;
   }

function generateandDisplayArray(){
  const start =parseInt(document.getElementById('start').value);
  const end =parseInt(document.getElementById('end').value);
  const resultArray =generateArray(start,end);
  document.getElementById("result").textContent='GenerateArray:' +resultArray.join(',');
}