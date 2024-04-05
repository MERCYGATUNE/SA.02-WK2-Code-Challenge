//  A FUNCTION THAT TAKES AN ARRAY OF NUMBERS AS INPUT AND RETURNS A NEW ARRAY CONTAINING ONLY THE PRIME NUMBERS FROM THE ORIGINAL ARRAY

function isPrime(num) {

  if(num<=1){
     return false;
  }
    // Iterate through each number

    for(let i = 2; i <=Math.sqrt( num); i++) {
        // Check if numbers in array contain prime
      if(num% i === 0) {
        
        return false;
      }
    }
    return true;
  }
// A FUNCTION TO FILTER PRIME NUMBERS
function filterPrimes(numbers) {
  return numbers.filter(num => isPrime(num));
}
// A FUNCTION TO FILTER AND DISPLAY PRIME NUMBERS
function filterAndDisplay() {
  const inputString = document.getElementById('numbersInput').value;
  const numbers = inputString.split(',').map(num => parseInt(num.trim()));
  const primeNumbers = filterPrimes(numbers);
  document.getElementById('output').textContent = primeNumbers.join(', ');
}
