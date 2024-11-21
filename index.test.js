const { fromZip } = require('./index')

test ("working smoke", () => {
    expect(fromZip('76020')).not.toBe(null)
})