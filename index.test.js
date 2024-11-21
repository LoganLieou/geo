const geo = require("./index")

test ("working smoke", () => {
    expect(geo.fromZip('76020')).not.toBe(null)
})