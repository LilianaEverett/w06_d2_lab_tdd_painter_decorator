const assert = require('assert')
const PaintCan = require('../paint_can')

describe('paint can', function() {
  let paintCan
  beforeEach(function(){
    paintCan = new PaintCan (10)
  })

  it('should have a number of litres of paint', function() {
    const actual = paintCan.litres
    assert.strictEqual(actual, 10)
  })

  it("should be able to check if it's empty", function() {
    const paint = new PaintCan(0)
    const actual = paint.isEmpty()
    assert.strictEqual(actual, true)
  })

  it('should be able to empty itself of paint', function() {
    paintCan.emptyItself()
    assert.strictEqual(paintCan.isEmpty(), true)
  })
})
