//  A FUNCTION THAT TAKES AN ARRAY OF NUMBERS AS INPUT AND RETURNS A NEW ARRAY CONTAINING ONLY THE PRIME NUMBERS FROM THE ORIGINAL ARRAY

function isPrime(element) {
    // Iterate through each element
    for(let i = 2; i < element; i++) {
        // Check if elements in array contain prime
      if(element % i === 0) {
        
        return false;
      }
    }
    return element !== 1;
  }
//    Declare variables

  let array = [1,2,3,4,5,6,7,8,9,10];
  let primes = array.filter(isPrime);

//   THE OUTPUT EXPECTED

  console.log("array: " + array);
  console.log("primes: " + primes);