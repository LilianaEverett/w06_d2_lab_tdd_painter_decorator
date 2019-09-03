const assert = require('assert')
const Room = require('../room')

describe('room', function() {
  let room
  beforeEach(function() {
    room = new Room(10, false)
  })

  it('should have an area', function() {
    const actual = room.area
    assert.strictEqual(actual, 10)
  })

  it('should strat not painted', function () {
    const actual = room.painted
    assert.strictEqual(actual, false)
  })

  it('should be able to be painted', function() {
    const actual = room.isPainted()
    assert.strictEqual(actual, true)
  })
})
