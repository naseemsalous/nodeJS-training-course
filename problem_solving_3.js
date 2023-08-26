function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  // Test
  const input = "Hello, World!";
  const reversed = reverseString(input);
  console.log(reversed); //  "!dlroW ,olleH"
