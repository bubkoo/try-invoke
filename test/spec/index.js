'use strict';

var expect = require('chai').expect;


describe('try-invoke', function () {

  var tryInvoke = require('../../');

  it('common', function () {

    var obj = {
      add: function () {
        var result = 0;
        var length = arguments.length;

        if (length > 5) {
          throw new Error('Too many arguments');
        }

        if (length > 4) {
          throw  'Too many arguments';
        }

        for (var i = 0; i < length; i++) {
          result += arguments[i]
        }
        return result;
      }
    };

    expect(tryInvoke(function (a, b, c, d) {
      return this.add(a, b, c, d);
    }, obj, [1, 2, 3, 4])).to.be.equal(10);


    expect(tryInvoke(function (a, b, c, d) {
      return this.add(a, b, c, d, d);
    }, obj, [1, 2, 3, 4])).to.an.instanceof(Error);


    expect(tryInvoke(function (a, b, c, d) {
      return this.add(a, b, c, d, d, d);
    }, obj, [1, 2, 3, 4])).to.an.instanceof(Error);


  });

});
