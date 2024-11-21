const g = require('geo')

const test = require('node:test')
const assert = require('node:assert')

/**
 * This is the only test, is a blackbox test which validates that the
 * functionality works as expected (I may write more about this in the future)
 */
test('working smoke', (t) => {
    assert.notStrictEqual(g.fromZip('76020'), null, 'Value is null')
})

