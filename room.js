const Room = function(area, painted) {
  this.area = area
  this.painted = painted
}

Room.prototype.isPainted = function () {
  return this.painted = true
};

module.exports = Room
