var EventEmitter = require('events').EventEmitter;
var stopwatches = {};

function Stopwatch(id) {
  EventEmitter.call(this);

  this.id = id;
  this.seconds = 0;
  this.interval = 1000;
  this.timer = null;
}

Stopwatch.prototype.__proto__ = EventEmitter.prototype;

Stopwatch.prototype.stop = function () {
  clearInterval(this.timer);
  this.timer = null;
};

Stopwatch.prototype.start = function () {
  if (this.started()) { return false; }

  var self = this;

  self.timer = setInterval(function () {
    self.seconds++
    self.emit('tick', self.seconds);
  }, self.interval);

  return true;
};

Stopwatch.prototype.started = function () {
  return !!this.timer;
};

Stopwatch.prototype.restart = function () {
  this.stop();
  this.removeAllListeners('tick');
  this.start();
};

Stopwatch.prototype.setSeconds = function (secs) {
  this.seconds = secs
}

module.exports = {
  Stopwatch: Stopwatch,
  get: function (id) {
    if (!stopwatches[id]) {
      stopwatches[id] = new Stopwatch(id);
    }
    return stopwatches[id];
  }
};
