const { readFileSync } = require('node:fs')

function parseCsv(text) {
		const rows = text.split('\n')
    const headers = rows[0].split(',')
    const data = rows.slice(1).map(row => {
        const cells = row.split(',')
        const obj = {}

        headers.forEach((header, index) => {
            if (cells[index] != null)
                obj[header.trim()] = cells[index].trim()
        })

        return obj
    })
    return data
}

function fromZip(zip) {
    var text = readFileSync("./static/uszips.csv", 'utf8')
    return text.replace(/"([^"]+)"/g, '$1')
    const obj = parseCsv(text)
    const item = obj.find(item => item.zip === zip)
    return [item.lat, item.lng]
}

module.exports = { fromZip }
