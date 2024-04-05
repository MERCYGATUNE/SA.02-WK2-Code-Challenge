//   WRITE A FUNCTION THAT ACCEPTS A STRING AS INPUT AND SWAPS THE CASSE OF EACH CHARACTER
//  THE FUCTION SHOULD INPUT 'The Quick Brown Fox' and output 'tHE qUICK bROWN fOX'
 
function swapCase( string) {
let swapString ='';
// ITERATE THROUGH THE STRING
for ( let i=0;i<string.length;i++ ) {
let currentChar = string[i];

if (currentChar === currentChar.toUpperCase()) {
swapString +=currentChar.toLowerCase();

}else{

    swapString +=currentChar.toUpperCase();
}
 }
  return swapString;
}
// A FUNCTION TO SWAP CASE OF STRING AND DISPLAY GENERATED STRING
 function swapCaseandDisplay(){

 const inputText=document.getElementById('textInput').value;
 const swapText = swapCase(inputText);
 document.getElementById('output').textContent= swapText;

 }








