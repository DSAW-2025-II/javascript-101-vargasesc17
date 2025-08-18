// Sum of Two Numbers
function sum(a, b) {
  if (typeof a != "number" || typeof b != "number") {
    return console.log("Los datos de entrada no son adecuados");
  } else {
    return (a + b);
  }
}

// Factorial of a Number
function factorial(n) {
  if (typeof n != "number" || !Number.isInteger(n)) {
    return console.log("Los datos de entrada no son adecuados");
  } else {
    if (n === 0) return 1;
    return n * factorial(n-1);
  }
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return console.log("Los datos de entrada no son adecuados");
  } else {
      let newArr = arr.filter(number => typeof number == 'number' && !isNaN(number));
      if (newArr.length === 0) {
      return console.log("Los datos de entrada no son adecuados");
      }

      let max = -Infinity;
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > max) {
          max = newArr[i];
        }
      }
    return max;
    } 
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str != "string") {
    return console.log("Los datos de entrada no son adecuados");
  } else {
      const vowels = 'aeiouáéíóúüàâæçèêëîïôœùûÿäöãõAEIOUÁÉÍÓÚÜÀÂÆÇÈÊËÎÏÔŒÙÛŸÄÖÃÕ';
      let count = 0;

      for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
          count++;
        }
      }
      return count;
    }
}

// Check if a Number is Prime
function isPrime(n) {
  if (!Number.isInteger(n)) {
    return console.log("Los datos de entrada no son adecuados");
  } else if (n < 2) {
      return false;
  } else {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
        return false;
        }
      }
      return true;
    }
}

module.exports = {
  sum, 
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
