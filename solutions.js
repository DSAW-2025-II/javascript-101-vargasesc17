// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a != "number" || typeof b != "number") {
    console.log("Los datos de entrada no son adecuados.");
  } else {
    return (a + b);
  }
}

module.exports = {
  sum
};
