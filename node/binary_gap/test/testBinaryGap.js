'use strict';

var should = require('chai').should();

describe('Binary gap function', function () {

  var binaryGap;

  before(function () {  
    binaryGap = require('../binary_gap');
  });

  it('should find the binary gap correctly', function (done) {

    binaryGap(1041).should.equal(5);
    binaryGap(1).should.equal(0);
    binaryGap(2147483647).should.equal(0);

    done();
  }); 
});