//Rotate an array (A) to the right by a given number (K) of steps.
var cyclicRotation = function (A, K) {
  if (A.length === 0) return A;
  for (var i = 0; i < K; i++) {
    A.unshift(A.pop());
  }
  return A;
};

module.exports = cyclicRotation;