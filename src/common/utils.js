module.exports = {
    dataParams (data) {
        data = data || {}
        let param = ''
        for (let key in data) {
            param += key + '=' + data[key] + '&'
        }

        return '?' + param.substr(0, param.length - 1)
    }
}