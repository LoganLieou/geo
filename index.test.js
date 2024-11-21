const { fromZip } = require('./index')

const test = require('node:test')
const assert = require('node:assert')

test ("working smoke", (t) => {
    assert.notStrictEqual(fromZip('76020'), null)
})