function isPalindrome(str) {
   
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
  
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
  }
  
  // Test cases
  console.log(isPalindrome('A man, a plan, a canal, Panama!')); // true
  console.log(isPalindrome('Race car')); // true
  console.log(isPalindrome('Hello, world!')); // false
  