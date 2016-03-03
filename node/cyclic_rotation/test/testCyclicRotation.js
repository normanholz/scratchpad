'use strict';

var should = require('chai').should();

describe('cyclic rotation', function () {

  var cyclicRotation;

  before(function () {
    cyclicRotation = require('../cyclic_rotation');
  });

  it('should rotate a given array correctly', function(done){
    cyclicRotation([], 3).should.eql([]);
    cyclicRotation([3, 8, 9, 7, 6], 3).should.eql([9, 7, 6, 3, 8]);
    done();
  });

});