var should = require('should');
var StopwatchManager = require('../lib/stopwatch');

describe('StopwatchManager', function() {
  var stopwatch = StopwatchManager.get(1);

  describe('getting an instance', function() {
    var subject = StopwatchManager.get(1);

    it('should have the same seconds', function() {
      subject.seconds.should.equal(stopwatch.seconds);
    });

    it('should have the same interval', function() {
      subject.interval.should.equal(stopwatch.interval);
    });
  });
  
});
