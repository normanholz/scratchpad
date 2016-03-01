var binaryGapNaive = function(N) {

  // convert n into binary representation
  var binary = N.toString(2);

  var result = 0;
  var longestGap = 0;

  binary.split('').forEach(function(c) {
    if (c === '0') {
      longestGap ++;
    } else {
      if (longestGap > result) {
        result = longestGap;
      }
      longestGap = 0;
    }
  });

  return result;
};

module.exports = binaryGapNaive;