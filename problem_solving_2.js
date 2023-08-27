function isPrime(number) {
    if (number <= 1) {
      return false; 
    }
  
 
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; 
      }
    }
  
    return true;
  }
  

  
  console.log(isPrime(2));   //  true
  console.log(isPrime(17));  //  true
  console.log(isPrime(4));   //  false
  console.log(isPrime(9));   //  false
  console.log(isPrime(1));   //  false
  